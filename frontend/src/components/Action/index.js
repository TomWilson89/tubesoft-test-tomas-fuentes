import React from "react";
import classes from "./styles.module.scss";

const Action = ({ handleStop, handleStart, handlePause, started }) => {
  return (
    <div data-testid="action" className={classes.Action}>
      <button
        data-testid="stop"
        onClick={handleStop}
        className={classes.Button}
      >
        STOP
      </button>
      {!started && (
        <button
          data-testid="start"
          onClick={handleStart}
          className={classes.Button}
        >
          START
        </button>
      )}
      {started && (
        <button
          data-testid="pause"
          onClick={handlePause}
          className={classes.Button}
        >
          PAUSE
        </button>
      )}
    </div>
  );
};

export default Action;
