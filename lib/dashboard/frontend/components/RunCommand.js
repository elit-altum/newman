import { socket } from "../pages/index";
import { useEffect, useState } from "react";

import {
    AiOutlinePauseCircle as PauseIcon,
    AiOutlineStop as StopIcon,
    AiOutlinePlayCircle as ResumeIcon,
} from "react-icons/ai";

const RunCommand = (props) => {
    const [isEnded, setIsEnded] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        socket.on("process:end", (data) => {
            if(data.processId === props.processId) {
                setIsEnded(true);
            }
        });
    }, []);

    const sendPauseCommand = () => {
        if(!isEnded) {
            socket.emit("exec-run:control-command", { action: 'pause', processId: props.processId });
        }
    }

    const sendAbortCommand = () => {
        if(!isEnded) {
            socket.emit("exec-run:control-command", { action: 'abort', processId: props.processId });
        }
    };

    const sendResumeCommand = () => {
        if (!isEnded) {
            socket.emit("exec-run:control-command", { action: 'resume', processId: props.processId });
        }
    };

    const handlePauseButton = () => {
        if(isPaused) {
            sendResumeCommand();
            setIsPaused(false);
            return;
        }

        sendPauseCommand();
        setIsPaused(true);
    }

    return (
        <div className="exec-run">
            <div className="exec-run-meta">
                <div className="exec-run-buttons">
                    <button
                        title="Pause/Resume the executing run"
                        onClick={handlePauseButton}
                        disabled={isEnded}
                    >
                        {isPaused ? <ResumeIcon /> : <PauseIcon />}
                    </button>
                    <button
                        title="Stop the executing run"
                        onClick={sendAbortCommand}
                        disabled={isEnded}
                    >
                        <StopIcon />
                    </button>
                </div>
                <p className="exec-run-id">{props.processId}</p>
                <p className="exec-run-time">
                    {new Date(props.startTime).toLocaleString(undefined, {
                        timeZone: "asia/kolkata",
                    })}
                </p>
            </div>

            <p className="exec-run-command">{props.command}</p>
        </div>
    );
};

export default RunCommand;
