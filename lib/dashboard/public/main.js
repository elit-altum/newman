/* eslint-disable*/
const socket = io();
const errorMessage = document.getElementById('error-message');
const execRuns = document.getElementById('exec-runs');

const expiredRuns = [];

const clickPauseButton = (value) => {
    const processId = value.parentElement.getAttribute("data-process-id");

    if(expiredRuns.indexOf(processId) === -1) {
        const currVal = document.getElementById(`pauseButton-${processId}`)
            .innerText;
        if (currVal == "Pause") {
            socket.emit("onPauseProcess", {
                processId,
            });
            document.getElementById(`pauseButton-${processId}`).innerText =
                "Resume";
        } else {
            socket.emit("onResumeProcess", {
                processId,
            });
            document.getElementById(`pauseButton-${processId}`).innerText =
                "Pause";
        } 
    }
};

const clickAbortButton = (value) => {
    const processId = value.parentElement.getAttribute("data-process-id");

    if (expiredRuns.indexOf(processId) === -1) {
        socket.emit("onAbortProcess", {
            processId,
        });     
    }
};

const clickTerminateButton = () => {
    socket.emit('onCloseDashboard');
}

const newProcessHTML = (data) => {
    return `<div class="exec-run" data-process-id=${data.processId} >
        <button class="pause-button" onclick="clickPauseButton(this)" id="pauseButton-${data.processId}">Pause</button>
        <div>
            <p class="exec-run-command">${data.command}</p>
            <p class="exec-run-date">${data.startTime}</p>
        </div>
        <button class="abort-button" onclick="clickAbortButton(this)">Abort</button>
      </div>`;
}

socket.on("newProcessFrontend", (data) => {
    execRuns.innerHTML = execRuns.innerHTML + newProcessHTML(data);
});

socket.on("endProcessFrontend", (data) => {
    expiredRuns.push(data.processId);
});
