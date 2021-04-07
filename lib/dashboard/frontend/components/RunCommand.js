const RunCommand = (props) => {
  return (
      <div className="exec-run">
          <div className="exec-run-meta">
              <p className="exec-run-id">{props.processId}</p>
              <p className="exec-run-time">
                  {new Date(props.startTime).toLocaleString(undefined, { timeZone: 'asia/kolkata'})}
              </p>
          </div>

          <p className="exec-run-command">{props.command}</p>
      </div>
  );
}

export default RunCommand;