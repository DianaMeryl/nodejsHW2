const fs = require('fs');

function reverseFile(inputFilePath, outputFilePath) {

    fs.readFile(inputFilePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error('File not found');
            } else {
                console.error('Error reading file:', err);
            }
            return;
        }
        const reversedData = data.reverse();

        fs.writeFile(outputFilePath, reversedData, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('File was processed successfully');
        });
    });
}

const inFilePath = './hw23/input.txt';
const outFilePath = './hw23/output.txt';

reverseFile(inFilePath, outFilePath);
