const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server is Now runing");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1> Welcome to the bicycle shop </h2>");
});
server.listen(30000);
