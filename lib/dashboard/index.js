/* eslint-disable*/
var forever = require("forever-monitor");
const path = require("path");

var child = new forever.Monitor(path.join(__dirname, "./socket-server.js"), {
    max: 1,
    silent: true,
    args: [],
});

child.start();

