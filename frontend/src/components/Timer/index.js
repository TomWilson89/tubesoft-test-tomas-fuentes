import React from "react";
import classes from "./styles.module.scss";
const Timer = ({ time }) => {
  return (
    <div data-testid="timer" className={classes.Timer}>
      <div data-testid="minute" className={classes.Min}>
        {("0" + time.minute).slice(-2)}
      </div>
      :
      <div data-testid="second" className={classes.Sec}>
        {("0" + time.second).slice(-2)}
      </div>
      :
      <div data-testid="millisecond" className={classes.Msec}>
        {("0" + time.millisecond).slice(-2)}
      </div>
    </div>
  );
};

export default Timer;
