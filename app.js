"use strict";

var hello = require("./Hello.js");
var fs = require("fs");

var Reader = fs.createReadStream("./DataToPipe")
var Writer = fs.createWriteStream("./FileToBePiped")

Reader.pipe(Writer);

hello();