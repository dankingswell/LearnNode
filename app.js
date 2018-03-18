"use strict";

var hello = require("./Hello.js");
var fs = require("fs");
var zlib = require("zlib");



var Reader = fs.createReadStream(__dirname + "/DataToPipe.txt");
var Writer = fs.createWriteStream(__dirname + "/FileToBePiped.txt");

var Zipstream = zlib.createGzip();
var Compressed = fs.createWriteStream(__dirname +  "/CompressedPipe.gz");
var UnzippedGunzip =zlib.createGunzip();
var Unzipped =fs.createWriteStream(__dirname + "/Uncompressed.txt");


Reader.pipe(Writer);
Reader.pipe(Zipstream).pipe(Compressed);
Zipstream.pipe(UnzippedGunzip).pipe(Unzipped);
//console.log(Unzipped)

hello();