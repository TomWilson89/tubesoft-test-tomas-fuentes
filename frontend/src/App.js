import React from "react";
import axios from "axios";

import classes from "./styles/styles.module.scss";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Action from "./components/Action";

const App = () => {
  const [time, setTime] = React.useState({
    minute: 0,
    second: 0,
    millisecond: 0,
  });
  const [start, setStart] = React.useState(false);
  const [interv, setInterv] = React.useState();

  let updatedMilliseconds = time.millisecond;
  let updatedSeconds = time.second;
  let updatedMinute = time.minute;

  const run = () => {
    if (updatedMilliseconds === 100) {
      updatedSeconds++;
      updatedMilliseconds = 0;
    }
    if (updatedSeconds === 60) {
      updatedMinute++;
      updatedSeconds = 0;
    }
    updatedMilliseconds++;

    return setTime({
      millisecond: updatedMilliseconds,
      second: updatedSeconds,
      minute: updatedMinute,
    });
  };

  const handleStart = () => {
    setStart(true);
    run();
    setInterv(setInterval(run, 10));
  };

  const handlePause = () => {
    clearInterval(interv);
    setStart(false);
  };

  const handleStop = async () => {
    clearInterval(interv);
    setStart(false);
    await axios.post(`http://localhost:4000/create`, time);
    setTime({ millisecond: 0, minute: 0, second: 0 });
  };

  return (
    <main className={classes.Parent}>
      <section className={classes.Main}>
        <Header />
        <Timer time={time} />
        <Action
          started={start}
          handleStop={handleStop}
          handleStart={handleStart}
          handlePause={handlePause}
        />
      </section>
    </main>
  );
};

export default App;
