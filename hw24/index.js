const fs = require('fs');

function readFile(filePath) {

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error('File not found');
            } else {
                console.error('Error reading file:', err);
            }
            return;
        }
        console.log(data.toString());
    });
}

const textFilePath = './hw24/text.txt';


readFile(textFilePath);
