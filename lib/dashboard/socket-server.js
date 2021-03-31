/* eslint-disable*/
const express = require("express");
const socket = require("socket.io");
const path = require("path");

const ipc = require("node-ipc");

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
        // process.send({ msg: "Pause process." });
    });

    // handle request to resume the paused process
    socket.on("onResumeProcess", function () {
        // process.send({ msg: "Resume process." });
    });

    // handle request to abort the current process
    socket.on("onAbortProcess", function () {
        try {
            process.send({ msg: "Abort process." });    
        } catch (error) {
            socket.broadcast.emit("noProcessRunning");
        }
    });

    // handle request to start a new process
    socket.on("onStartProcess", function () {
        // process.send({ msg: "Start process." });
    });

    // stop the dashboard
    socket.on("onCloseDashboard", function (data) {
        console.log("Closing the dashboard. Thank You.");
        process.exit(0);
    });
});
