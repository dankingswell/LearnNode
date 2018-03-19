"use strict";

var http = require("http");
var fs =  require("fs");


http.createServer(function(req, res)
{
    res.writeHead(200,
         { "Content-Type" :"text/html" }
        );
    var html = fs.readFileSync(__dirname + "/index.htm");
    console.log("Server has recieved a request.");
    res.end(html);
    

}).listen(1300,"127.0.0.1");