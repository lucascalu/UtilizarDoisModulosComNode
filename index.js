var http = require('http');
var dt = require('./myfirstmodule');
var dt1 = require('./mysecondmodule');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Login " + dt.myDateTime() + "\n"+ "cadastro" + dt1.myDateTime1());
  res.end();
}).listen(8080);
