const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") return;

  const myURL = new URL(req.url, `http://${req.headers.host}/`);
  const pathname = myURL.pathname;
  const id = myURL.searchParams.get("id");

  if (pathname === "/") {
    const html = await fs.readFile("./view/bicycles.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (pathname === "/bicycle" && 5 >= id >= 0) {
    const html = await fs.readFile("./view/overview.html", "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<div> <h1> File Not Found </h1> </div>");
  }
});

server.listen(3000);
