const http = require("http");

const server = http.createServer((req, res) => {
  res.write('Hello, world!');
  res.end();
});

server.listen(2222, () => {
  console.log("Server started");
});
