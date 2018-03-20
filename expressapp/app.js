// npm init makes package.json
// download nodemon: sudo npm install -g nodemon
// nodemon app.js
var http = require("http");
var express = require("express");
var app = express();


// looks for server port (not always PORT) else port 3000 if null;
var port = process.env.PORT || 3000;

// must be declared before static as static does not next.
app.use("*/public", function(req,res,next)
{
 console.log("only triggers on public")
 next();
})

app.use("/public", express.static(__dirname + "/public"))

app.use("/",function(req,res,next)
{
    console.log("All trigger with next")
    next();
})


/*  EQUIVELENT TO EXPRESS

http.createServer(function(req,res){
    if (req.ul === "/")
    {
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("<html></html>");
    }
}).listen(3000,"127.0.0.1")*/


app.get("/",function(req,res)
{
    console.log("responsed init for get")
    res.send("<html><head><link href=/public/style.css rel=stylesheet type=text/css ></head><body><h1>Server</h1></body></html>");
    console.log("responsed sent for get")

});

app.get("/Json",function(req,res)
{
    /* Equivelent to res.end(JSON.stringify("first":"Hello", "last":"Darkness"})) */
    res.json({first:"Hello", last:"Darkness"});

})

app.get("/person/:id",function(req,res)
{

    res.send("<html><head></head><body><h1>"+ req.params.id + "</h1></body></html>");

})

app.listen(port);
