import click
import requests
from bs4 import BeautifulSoup
import os
import hashlib
from imdb import IMDb

# Function to find IMDb ID based on the movie file name
def get_imdb_id(movie_file):
    ia = IMDb()
    movie_name = os.path.basename(movie_file).split('.')[0]  # Extract the movie name from the file
    search_results = ia.search_movie(movie_name)
    if search_results:
        return search_results[0].movieID
    return None

# Function to compute a unique hash for the movie file
def compute_movie_hash(file_path):
    read_size = 64 * 1024
    with open(file_path, 'rb') as f:
        size = os.path.getsize(file_path)
        data = f.read(read_size) + f.read(size - read_size)
        return hashlib.md5(data).hexdigest(), size

# Function to scrape subtitles using BeautifulSoup
def scrape_subtitles(imdb_id, language, file_size=None, hash_value=None):
    base_url = f"https://www.opensubtitles.org/en/search/sublanguageid-{language}/imdbid-{imdb_id}"
    response = requests.get(base_url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        subtitles = []

        # Scrape subtitle details like download links and descriptions
        for item in soup.select('tr.change'):
            title = item.find('a', class_='bnone').text
            download_link = item.find('a', class_='bnone')['href']
            subtitles.append({
                'title': title,
                'download_link': f"https://www.opensubtitles.org{download_link}"
            })

        # Sort subtitles by the most downloaded
        subtitles.sort(key=lambda x: x['title'], reverse=True)
        return subtitles
    else:
        click.echo("Failed to fetch subtitles.")
        return []

# Function to download the selected subtitle
def download_subtitle(subtitle, output_folder):
    download_link = subtitle['download_link']
    response = requests.get(download_link)
    if response.status_code == 200:
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        filename = subtitle['title'].replace(' ', '_') + '.srt'
        with open(os.path.join(output_folder, filename), 'wb') as file:
            file.write(response.content)
        click.echo(f"Downloaded: {filename}")
    else:
        click.echo("Failed to download the subtitle.")

# Main CLI function using Click
@click.command(help="CLI app to scrape and download subtitles for a given movie file.")
@click.option('-l', '--language', default='en', help='Filter subtitles by language (e.g., "en" for English).')
@click.option('-o', '--output', default='subtitles', help='Specify the output folder for the subtitles.')
@click.option('-s', '--file-size', type=int, help='Filter subtitles by movie file size (in bytes).')
@click.option('-h', '--match-by-hash', is_flag=True, help='Match subtitles by movie hash.')
@click.option('-b', '--batch-download', is_flag=True, help='Enable batch mode for downloading subtitles for all movies in a directory.')
@click.argument('movie_file', type=click.Path(exists=True))
def subtitle_scraper(language, output, file_size, match_by_hash, batch_download, movie_file):
    """
    Subtitle Scraper CLI

    This app scrapes subtitles from OpenSubtitles for a given movie file (.mp4).
    It allows filtering by language, file size, or movie hash, and supports batch downloading.
    """

    # Get IMDb ID for the movie
    imdb_id = get_imdb_id(movie_file)
    if not imdb_id:
        click.echo("IMDb ID could not be found for the movie.")
        return

    # Compute movie hash if needed
    hash_value = None
    if match_by_hash:
        hash_value, _ = compute_movie_hash(movie_file)
    
    # Scrape subtitles from OpenSubtitles
    subtitles = scrape_subtitles(imdb_id, language, file_size, hash_value)

    # Display the subtitles list to the user
    if subtitles:
        click.echo("Available Subtitles:")
        for index, subtitle in enumerate(subtitles):
            click.echo(f"{index + 1}. {subtitle['title']}")

        # Prompt the user to choose a subtitle to download
        choice = click.prompt("Enter the number of the subtitle to download", type=int)
        if 1 <= choice <= len(subtitles):
            download_subtitle(subtitles[choice - 1], output)
        else:
            click.echo("Invalid choice. Exiting...")
    else:
        click.echo("No subtitles found.")

# Entry point
if __name__ == '__main__':
    subtitle_scraper()
