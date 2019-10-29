const fs = require('fs');

const readableStream = fs.createReadStream('file2.txt', { 
    highWaterMark: 10
});

readableStream.on('readable', () => {
    console.log(`chunk: ${readableStream.read()}`);
});

readableStream.on('end', () => {
    console.log('end');
});