const fs = require('fs');
const file = fs.createWriteStream('file2.txt');

file.write('hello world');
file.end(', from streams!');