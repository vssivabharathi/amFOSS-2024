use std::fs::File;
use std::io::{self, BufRead, Write};
use std::path::Path;

fn main() -> io::Result<()> {
    let input_file_path = "input.txt";
    let output_file_path = "output.txt";

    // Reading the number n from input.txt
    let n: usize = match read_number_from_file(input_file_path) {
        Ok(num) => num,
        Err(e) => {
            eprintln!("Error reading from input file: {}", e);
            return Err(e);
        }
    };

    let mut output_file = File::create(output_file_path)?;

    // Upper part of the diamond
    for i in 1..=n {
        writeln!(output_file, "{}{}", " ".repeat(n - i), "*".repeat(2 * i - 1))?;
    }
    // Lower part of the diamond
    for i in (1..n).rev() {
        writeln!(output_file, "{}{}", " ".repeat(n - i), "*".repeat(2 * i - 1))?;
    }

    println!("Diamond pattern generated and written to output.txt.");
    Ok(())
}

fn read_number_from_file(file_path: &str) -> io::Result<usize> {
    let file = File::open(file_path)?;
    let reader = io::BufReader::new(file);
    if let Some(Ok(line)) = reader.lines().next() {
        return Ok(line.trim().parse().unwrap());
    }
    Err(io::Error::new(io::ErrorKind::InvalidData, "Invalid number format"))
}
