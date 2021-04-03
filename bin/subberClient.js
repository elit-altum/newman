/* eslint-disable */
// communicate to the newman dashboard socket server
let emitProcessEnd = () => {};
let listenEvents = () => {};
let emitProcessStart = () => {};

try {
  // client library to connect to socket server
  const io = require("socket.io-client");

  // unique process id
  const processId = `run-${Date.now().toString()}`;

  // connect to the socket server as a client
  const socket = io("http://localhost:5001/");

  // to notify server about start of a new process
  emitProcessStart = (argv) => {
    let cmdString = '';
    let runIndex = argv.indexOf('run');

    // get the user command string from the argv
    if(runIndex !== -1) {
      for( i = runIndex; i < argv.length; ++i) {
        cmdString += argv[i] + " ";
      }
    }

    socket.emit("newProcess", {
        processId,
        startTime: new Date(),
        command: cmdString
    });
  }

  // to notify server about the end of a process
  emitProcessEnd = () => {
      socket.emit("endProcess", {
          processId,
      });
      
      // close the client connection with socket
      socket.close();
  };

  // listen for various control events from the server
  listenEvents = () => {
    socket.on('pauseProcess', (data) => {
      if (data.processId === processId) {
        console.log("\nPAUSE PROCESS\n");
      }
    });

    socket.on("resumeProcess", (data) => {
        if (data.processId === processId) {
            console.log("\nRESUME PROCESS\n");
        }
    });

    socket.on("abortProcess", (data) => {
        if (data.processId === processId) {
            console.log("\nABORT PROCESS\n");
        }
    });
  }

} catch (error) {
  // Empty catch if the dashboard is not running
}

module.exports = {
  emitProcessEnd,
  emitProcessStart,
  listenEvents
}




