"use strict";

var http = require("http");
var fs =  require("fs");


http.createServer(function(req, res)
{
    if (req.url === "/Json")
    {
    res.writeHead(200,
         { "Content-Type" :"application/Json" }
        );
        var obj = {
            First:'Dan',
            Last:"King"
        };
        res.end(JSON.stringify(obj));
    }
    else
    {
        
        res.writeHead(404,{"Content_type":"Text/plain"});
        res.end("No page to be found here.");
        

    }
}).listen(1300,"127.0.0.1");

