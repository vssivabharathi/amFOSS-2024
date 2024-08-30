const fs = require('fs');

const inputFilePath = 'input.txt';
const outFilePath = 'output.txt';
// reading function
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Input file not found.');
        console.error(err);
        return;
    }

    fs.writeFile(outputFilePath, data, (err) => {
        if (err) {
            console.error('Error writing to output file.');
            console.error(err);
            return;
        }

        // Reading output
        fs.readFile(outputFilePath, 'utf8', (err, outputData) => {
            if (err) {
                console.error('Error reading from output file.');
                console.error(err);
                return;
            }

            console.log('Contents of output.txt:');
            console.log(outputData);
        });
    });
});