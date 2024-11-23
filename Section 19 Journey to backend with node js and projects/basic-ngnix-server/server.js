const http = require("http");
const fs = require("fs");
const path = require("path");

// Make sure that the port is not in use by any other application
const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  console.log("filePath", filePath);
  const extname = String(path.extname(filePath).toLowerCase());
  const mineType = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
  };
  const contentType = mineType[extname] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("404 Page Not Found");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
