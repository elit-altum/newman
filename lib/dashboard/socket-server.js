/* eslint-disable*/
const express = require("express");
const socket = require("socket.io");
const path = require("path");

// Auth middleware to authenticate client JWTs
const authMiddleware = require('./utils/authMiddleware');

// App setup
const PORT = 5001;

// initialize express app
const app = express();

// create express server
const server = app.listen(PORT, function () {
    // inform the parent process that the dashboard is ready
    process.send({
        status: "success",
        message: "Dashboard is up at localhost:5001",
    });
});

// Error creating an express server - most imp for catching EADDRINUSE i.e. port is bust/address already in use
server.on("error", (err) => {
    let socketStartErr = "ERROR: Cannot start dashboard.";

    // if port is busy
    if (err.code === "EADDRINUSE") {
        socketStartErr +=
            "\nPORT 5001 is busy. Please check if the dashboard is already running.";
    } else {
        socketStartErr += err.message;
    }

    // inform the parent process of any errors while running the dashboard.
    process.send({ status: "fail", message: socketStartErr });
});

// Static files
app.use(express.static(path.join(__dirname, "frontend", "out")));

// Socket setup - CORS is disabled for dev purposes only
const io = socket(server, {
    cors: {
        origin: '*'
    }
});

// Auth middleware
io.use(authMiddleware);

io.on('connection', (socket) => {  

    // If a newman run makes connection
    if (socket.payload.type === 'exec-run') {
        // Add the client to a room specifically for it's run
        socket.join(`events:${socket.payload.processId}`);

        // Listen to client for indicating start of newman run
        socket.on('exec-run:start', (data) => {

            // Emit to the room subscribed by the frontend informing it of a new run
            socket.to('all-runs:frontend').emit('process:start', data);
        });

        // Listen to client for indicating end of newman run
        socket.on('exec-run:end', (data) => {
            // Emit to the room subscribed by the frontend informing it of the end of a run
            socket.to('all-runs:frontend').emit('process:end', data);
        });

    } else if (socket.payload.type === 'frontend') {
        // If the frontend makes the connection

        // Add the frontend to a specific room
        socket.join(`all-runs:frontend`);

        // Listen to the client for any control commands issued by the frontend
        socket.on('exec-run:control-command', (data) => {

            // On any control command, emit it to the room which the concerned client is subscribed to
            socket.to(`events:${data.processId}`).emit('control-command', data);
        });

        // Close the daemon if the frontend requests it
        socket.on('server-action:close', () => {
            process.exit(1);
        })
    }
});
