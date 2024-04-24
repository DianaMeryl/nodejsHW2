const fs = require('fs');

const numbers = [1, 2, 3, 4, 5, 6, 7];
const buffer = Buffer.from(numbers);

fs.writeFile('./hw21/source.dat', buffer, (err) => {
    if (err) {
        console.error('Помилка при записі у файл:', err);
        return;
    }
    console.log('Бінарні дані успішно записані у файл source.dat');
});


const sourceFilePath = './hw21/source.dat';
const targetFilePath = './hw21/target.dat';

fs.readFile(sourceFilePath, (err, data) => {
    if (err) {
        console.error('Помилка при зчитуванні файлу:', err);
        return;
    }
    fs.writeFile(targetFilePath, data, (err) => {
        if (err) {
            console.error('Помилка при записі у файл:', err);
            return;
        }
        console.log('Дані успішно записані у файл target.dat');
    });
});


