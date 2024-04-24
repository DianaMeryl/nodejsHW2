const convertToBase64 = require('./convert.js');

const stringToConvert = 'Джордж Мартін. Гра престолів';

const base64String = convertToBase64.convertString(stringToConvert);

console.log(base64String); 