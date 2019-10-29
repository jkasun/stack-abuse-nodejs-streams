const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const src = fs.createReadStream('./video.mkv');
  src.pipe(res);
});

server.listen(1337);