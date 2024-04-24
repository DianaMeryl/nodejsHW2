function convertString(value) {
    
    const base64String = Buffer.from(value).toString('base64');
    return base64String;
}

module.exports.convertString = convertString;