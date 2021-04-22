import React from "react";
import classes from "./styles.module.scss";

const Header = () => {
  return (
    <div className={classes.Header}>
      <h1 data-testid="stopwatch">Stopwatch</h1>
    </div>
  );
};

export default Header;
