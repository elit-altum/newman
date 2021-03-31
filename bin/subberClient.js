/* eslint-disable */

let emitProcessEnd = () => {};
let listenEvents = () => {};
let emitProcessStart = () => {};

try {
  const io = require("socket.io-client");

  // current process id
  const processId = `run-${Date.now().toString()}`;

  const socket = io("http://localhost:5001/");

  emitProcessStart = (argv) => {
    let cmdString = '';
    let runIndex = argv.indexOf('run');

    if(runIndex !== -1) {
      for( i = runIndex; i < argv.length; ++i) {
        cmdString += argv[i] + " ";
      }
    }

    console.log(cmdString);
    socket.emit("newProcess", {
        processId,
        startTime: new Date(),
        command: cmdString
    });
  }

  // emit process has ended
  emitProcessEnd = () => {
      socket.emit("endProcess", {
          processId,
      });
  };

  // listen for pause events
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




