const fs = require('fs');

function copyFile(tocopyFilePath, copiedFilePath) {

    if (fs.existsSync(copiedFilePath)) {
        console.error('File with such name already exists in the destination folder');
        return;
    }

    const readStream = fs.createReadStream(tocopyFilePath);

    const writeStream = fs.createWriteStream(copiedFilePath);

    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File was copied successfully');
    });
}

if (process.argv.length !== 4) {
    console.error('Usage: node script.js sourceFilePath destinationFilePath');
} else {
    const tocopyFlPath = process.argv[2];
    const copiedFlPath = process.argv[3];
    copyFile(tocopyFlPath, copiedFlPath);
}


