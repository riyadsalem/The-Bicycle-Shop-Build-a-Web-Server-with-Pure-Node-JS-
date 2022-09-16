const http = require("http");
const path = require("path");

const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") return;

  //console.log(req.headers);
  const myURL = new URL(req.url, `http://${req.headers.host}/`);
  const pathname = myURL.pathname;
  const id = myURL.searchParams.get("id");
  console.log(pathname, id);
  // console.log(myURL);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1> Welcome to  the bicycle shop </h1>");
});

server.listen(3000);
