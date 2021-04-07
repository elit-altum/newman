import {useState, useEffect} from 'react';
import { io } from "socket.io-client";
import jwt from 'jsonwebtoken';

import RunCommand from '../components/RunCommand';

const socket = io("http://localhost:5001/", {
    auth: {
        token: jwt.sign({ load: "abc" }, "insertSecretKeyHere"),
    },
});

socket.on("connect_error", (err) => {
    console.log(err.message);
});

const HomePage = () => {
  const [newmanRuns, setNewmanRuns] = useState([]);

  useEffect(() => {
    socket.on("newProcessFrontend", (data) => {
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
          <h1>Newman Dashboard</h1>
          <div>  
            {newmanRuns.map(run => <RunCommand {...run} key = {run.processId}/>)}
          </div>
      </div>
  );
}

export default HomePage;
