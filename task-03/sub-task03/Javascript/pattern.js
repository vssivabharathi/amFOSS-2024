function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows - i; j++) {
        process.stdout.write(" ");
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        process.stdout.write("*");
      }
      console.log();
    }
  
    for (let i = rows - 2; i >= 0; i--) {
      for (let j = 0; j < rows - i; j++) {
        process.stdout.write(" ");
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        process.stdout.write("*");
      }
      console.log();
    }
  }
  
  const rows = 3;
  printPattern(rows);