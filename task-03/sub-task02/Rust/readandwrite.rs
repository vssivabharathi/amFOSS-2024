use std::fs::File;
use std::io::{self, Read, Write};
use std::path::Path;

fn main() -> io::Result<()> {
    let mut input_file = match File::open("input.txt") {
        Ok(file) => file,
        Err(_) => {
            println!("Input file not found.");
            return Ok(());
        }
    };

    let mut input_string = String::new();
    input_file.read_to_string(&mut input_string)?;

    let mut output_file = File::create("output.txt")?;
    output_file.write_all(input_string.as_bytes())?;

    let mut output_content = String::new();
    let mut output_reader = File::open("output.txt")?;
    output_reader.read_to_string(&mut output_content)?;

    println!("Contents of output.txt:\n{}", output_content);

    Ok(())
}
