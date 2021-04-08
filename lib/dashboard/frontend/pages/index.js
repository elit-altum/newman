import {useState, useEffect} from 'react';
import { io } from "socket.io-client";
import jwt from 'jsonwebtoken';

import RunCommand from '../components/RunCommand';

const socket = io("http://localhost:5001/", {
    auth: {
        token: jwt.sign({ type: 'frontend' }, "insertSecretKeyHere"),
    },
});

socket.on("connect_error", (err) => {
    console.log(err.message);
});

const onCloseDashboard = () => {
    socket.emit("server-action:close");
}

const HomePage = () => {
  const [newmanRuns, setNewmanRuns] = useState([]);

  useEffect(() => {
    socket.on("process:start", (data) => {
        let newRuns = newmanRuns;
        if (
            newRuns.findIndex((run) => run.processId === data.processId) === -1
        ) {
            newRuns.push(data);
        }

        setNewmanRuns([...newRuns]);
    });
  }, []);


  return (
      <div>
          <h1 className="page-heading">Newman Dashboard</h1>
          <div>  
            {newmanRuns.map(run => <RunCommand {...run} key = {run.processId}/>)}
          </div>
          <button className="close-dashboard-btn" onClick={onCloseDashboard}>
              Close Dashboard
          </button>
      </div>
  );
}

export default HomePage;
export {socket};
