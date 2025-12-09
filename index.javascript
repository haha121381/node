const http = require('http');

// 获取环境变量里的端口，如果没有就用 8000
const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello! Node.js environment is ready.\n');
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
