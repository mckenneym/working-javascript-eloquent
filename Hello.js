// Load the node-router library by creationix
var server = require('node-router').getServer();

var doSomething = function(input) {
  return input + ' world';
};

// Configure our HTTP server to respond with Hello World the root request
server.get('/', function (request, response) {
  response.simpleText(200, 'Hello World!');
});

server.get('/main', function (request, response) {
  response.simpleText(200, doSomething('Hello'));
});

// Listen on port 8080 on localhost
server.listen(8000, 'localhost');
