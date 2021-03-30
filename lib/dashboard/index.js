/* eslint-disable*/
var forever = require("forever-monitor");
const path = require("path");

var child = new forever.Monitor(path.join(__dirname, "./socket-server.js"), {
    max: 1,
    silent: true,
    args: [],
    logFile: './logs.txt',
    outFile: './logs.txt',
    errFile: './logs.txt'
});

child.start();

process.exit(0);


