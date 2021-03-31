/* eslint-disable*/
const socket = io();
const errorMessage = document.getElementById('error-message');

const clickPauseButton = () => {
    const currVal = document.getElementById("pauseButton").innerText;
    if(currVal == 'Pause') {
        socket.emit("onPauseProcess");
        document.getElementById("pauseButton").innerText = "Resume";
    } else {
        socket.emit("onResumeProcess");
        document.getElementById("pauseButton").innerText = "Pause";
    } 
};

const clickStartButton = () => {
    const userCommand = document.getElementById('runCommand').value;
    if(userCommand) {
       socket.emit("onStartProcess", {
           command: userCommand
       });
    }
};

const clickAbortButton = () => {
    socket.emit("onAbortProcess");
};

const clickCloseButton = () => {
    socket.emit("onCloseDashboard");
};

socket.on('noProcessRunning', () => {
    errorMessage.textContent = 'No running process';
})
