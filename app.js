const http = require('http');

const routes = require('./r1');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3001);