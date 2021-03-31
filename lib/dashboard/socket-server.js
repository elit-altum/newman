/* eslint-disable*/
const express = require("express");
const socket = require("socket.io");
const path = require("path");

// App setup
const PORT = 5001;

// initialize express app
const app = express();

// create express server
const server = app.listen(PORT, function () {
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
    // handle request to pause the current process
    socket.on("onPauseProcess", function () {
        process.send({ status: "pause" });
    });

    // handle request to resume the paused process
    socket.on("onResumeProcess", function () {
        process.send({ status: "resume" });
    });

    // handle request to abort the current process
    socket.on("onAbortProcess", function () {
        process.send({ status: "abort" });
    });

    // handle request to start a new process
    socket.on("onStartProcess", function (msg) {
        process.send({
            status: "run",
            command: msg.command
        });
    });

    // stop the dashboard
    socket.on("onCloseDashboard", function (data) {
        console.log("Closing the dashboard. Thank You.");
        process.exit(0);
    });
});
