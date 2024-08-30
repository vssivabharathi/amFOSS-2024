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
    let rows = 3;
    print_pattern(rows);
  }