const http = require("http");

const hostname = "localhost";
const port = 8080;
const server = http.createServer((req, res) =>{
    console.log(req.headers);
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body>Hello World</body></html>");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
