const fs = require('fs');

// File paths
const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

// input.txt
let n;
try {
    n = parseInt(fs.readFileSync(inputFilePath, 'utf8').trim(), 10);
} catch (error) {
    console.error("Error reading from input file or invalid number format.");
    process.exit(1);
}

let output = '';

// Upper part of the diamond
for (let i = 1; i <= n; i++) {
    output += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
}

// Lower part of the diamond
for (let i = n - 1; i >= 1; i--) {
    output += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
}

//  output.txt
try {
    fs.writeFileSync(outputFilePath, output);
    console.log("Diamond pattern generated and written to output.txt.");
} catch (error) {
    console.error("Error writing to output file.");
}
