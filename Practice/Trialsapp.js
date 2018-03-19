"use strict";

const hello = require("./Hello.js");
const fs = require("fs");
const zlib = require("zlib");
const http = require("http");



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