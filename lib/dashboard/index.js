/* eslint-disable*/
const cp = require('child_process');
const path = require('path');

// Run the socket server as a child process
const socketServer = cp.fork(path.join(__dirname, 'socket-server.js'));

// Handle child processes
const currId = 1;
const runningProcesses = {};

let newmanChildProcess;
let isRunning = 0;

// Launch a child process
socketServer.on('message', (m) => {
    // start a new newman run
    if(m.status === 'run' && isRunning == 0) {
        // display the executing command
        console.log(`\n> newman ${m.command} \n`);
        isRunning = 1;
        const commands = m.command.split(' ');
        newmanChildProcess = cp.fork(path.join(__dirname, '..', '..', 'bin', 'newman'), commands);

        newmanChildProcess.on('disconnect', () => {
            isRunning = 0;
        })
    } 
    // control the executing run 
    else if(isRunning){
        newmanChildProcess.send({ command: m.status });
        
    }

});




