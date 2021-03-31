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
    console.log('Server is up.');
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
    // handle request to pause the current process
    socket.on("onPauseProcess", function (data) {
        socket.broadcast.emit("pauseProcess", data);
    });

    // handle request to resume the paused process
    socket.on("onResumeProcess", function (data) {
        socket.broadcast.emit("resumeProcess", data);
    });

    // handle request to abort the current process
    socket.on("onAbortProcess", function (data) {
        socket.broadcast.emit("abortProcess", data);
    });

    // new process by client
    socket.on("newProcess", function (data) {
        socket.broadcast.emit('newProcessFrontend', data);
    });

    socket.on("endProcess", function (data) {
        socket.broadcast.emit("endProcessFrontend", data);
    });

    // stop the dashboard
    socket.on("onCloseDashboard", function (data) {
        console.log("Closing the dashboard. Thank You.");
        process.exit(0);
    });
});
