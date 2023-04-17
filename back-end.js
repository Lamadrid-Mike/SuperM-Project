const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/") {
    fs.readFile("index.html", "utf-8", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "page-not-found",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000, "localhost", () => {
  console.log("server running");
});
