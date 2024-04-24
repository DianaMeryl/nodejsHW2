function mergeBuffers(buffer1, buffer2) {
    
    const mergedBuffer = Buffer.concat([buffer1, buffer2]);

    return mergedBuffer;
}

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('World');
const mergedBuffer = mergeBuffers(buffer1, buffer2);

console.log(mergedBuffer.toString());