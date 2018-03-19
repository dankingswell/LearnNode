"use strict";

var http = require("http");
var fs =  require("fs");


http.createServer(function(req, res)
{
    res.writeHead(200,
         { "Content-Type" :"application/Json" }
        );
        var obj = {
            First:'Dan',
            Last:"King"
        };
        res.end(JSON.stringify(obj));

}).listen(1300,"127.0.0.1");

