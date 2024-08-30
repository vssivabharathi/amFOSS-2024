use std::io::{stdin, stdout, Write};

fn print_pattern(rows: i32) {
  for i in 0..rows {
    for j in 0..rows - i {
      print!(" ");
    }
    for k in 0..2 * i + 1 {
      print!("*");
    }
    println!();
  }

  for i in (rows - 2)..=0 {
    for j in 0..rows - i {
      print!(" ");
    }
    for k in 0..2 * i + 1 {
      print!("*");
    }
    println!();
  }
}

fn main() {
  let mut rows = String::new();
  stdout().write_all(b"Enter the number of rows: ").unwrap();
  stdin().read_line(&mut rows).expect("Failed to read line");
  let rows: i32 = rows.trim().parse().expect("Invalid input");
  print_pattern(rows);
}