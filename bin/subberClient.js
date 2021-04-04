/* eslint-disable */

// client library to connect to socket server
const io = require("socket.io-client");

// unique process id
const processId = `run-${Date.now().toString()}`;

// connect to the socket server as a client
const socket = io("http://localhost:5001/", {
  reconnectionDelay: 0
});

socket.on('error', () => {
  // empty error catcher
});

const emitDashboardStartProcess = (argv) => new Promise(resolve => {
  let cmdString = "";
  let runIndex = argv.indexOf("run");

  // get the user command string from the argv
  if (runIndex !== -1) {
      for (i = runIndex; i < argv.length; ++i) {
          cmdString += argv[i] + " ";
      }
  }
  socket.emit("newProcess", {
      processId,
      startTime: new Date(),
      command: cmdString,
  });
  resolve();
});

// to notify server about start of a new process
const emitProcessStart = (argv) => {
    let cmdString = "";
    let runIndex = argv.indexOf("run");

    // get the user command string from the argv
    if (runIndex !== -1) {
        for (i = runIndex; i < argv.length; ++i) {
            cmdString += argv[i] + " ";
        }
    }
    // console.log('emit new', socket);
    socket.emit("newProcess", {
        processId,
        startTime: new Date(),
        command: cmdString,
    });
};

// to notify server about the end of a process
const emitProcessEnd = () => {
    socket.emit("endProcess", {
        processId,
    });

    // close the client connection with socket
    socket.close();
};

// listen for various control events from the server
const listenEvents = () => {
    socket.on("pauseProcess", (data) => {
        if (data.processId === processId) {
            console.log("\nCONTROL COMMAND: PAUSE PROCESS\n");
        }
    });

    socket.on("resumeProcess", (data) => {
        if (data.processId === processId) {
            console.log("\nCONTROL COMMAND: RESUME PROCESS\n");
        }
    });

    socket.on("abortProcess", (data) => {
        if (data.processId === processId) {
            console.log("\nCONTROL COMMAND: ABORT PROCESS\n");
        }
    });
};

module.exports = {
    emitProcessEnd,
    emitProcessStart,
    listenEvents,
    emitDashboardStartProcess
};
