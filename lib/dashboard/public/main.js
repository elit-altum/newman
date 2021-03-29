/* eslint-disable*/
console.log("WOW");
const socket = io();

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
    socket.emit("onStartProcess");
};

const clickAbortButton = () => {
    socket.emit("onAbortProcess");
};

const clickCloseButton = () => {
    socket.emit("onCloseDashboard");
};
