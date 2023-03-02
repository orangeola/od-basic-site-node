var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/'){
    fs.readFile("index.html", function(err, text){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(text);
    });
    return;
  }
  else if (req.url == '/about'){
    fs.readFile("about.html", function(err, text){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(text);
    });
    return;
  }
  else if (req.url == '/contact-me'){
    fs.readFile("contact-me.html", function(err, text){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(text);
    });
    return;
  } else {
    fs.readFile("404.html", function(err, text){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(text);
    });
  }
}).listen(8080);