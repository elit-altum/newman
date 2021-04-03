/* eslint-disable*/
const socket = io();
const errorMessage = document.getElementById('error-message');
const execRuns = document.getElementById('exec-runs');

const expiredRuns = [];

// on clicking the pause button
const clickPauseButton = (value) => {
    // get process id of the process on which pause button has been clicked
    const processId = value.parentElement.getAttribute("data-process-id");

    // if the run has not ended
    if(expiredRuns.indexOf(processId) === -1) {
        const currVal = document.getElementById(`pauseButton-${processId}`)
            .innerText;

        if (currVal == "Pause") {
            // emit to server to pause this process
            socket.emit("onPauseProcess", {
                processId,
            });
            // change button text from pause -> resume
            document.getElementById(`pauseButton-${processId}`).innerText =
                "Resume";
        } else {
            // emit to server to pause this process
            socket.emit("onResumeProcess", {
                processId,
            });
            // change button text from resume -> pause
            document.getElementById(`pauseButton-${processId}`).innerText =
                "Pause";
        } 
    }
};

// on clicking the abort button
const clickAbortButton = (value) => {
    const processId = value.parentElement.getAttribute("data-process-id");

    // if the run has not ended
    if (expiredRuns.indexOf(processId) === -1) {
        socket.emit("onAbortProcess", {
            processId,
        });     
    }
};

// on clicking terminate button
const clickTerminateButton = () => {
    // emit to server to end the process which runs the dashboard
    socket.emit('onCloseDashboard');
}

// HTML for adding a new element to the runs
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

// for adding a new process to the frontend
socket.on("newProcessFrontend", (data) => {
    execRuns.innerHTML = execRuns.innerHTML + newProcessHTML(data);
});

// for adding a process to the expired process list i.e. this run has ended
socket.on("endProcessFrontend", (data) => {
    expiredRuns.push(data.processId);
});
