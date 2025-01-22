import React from "react";
import { useState,useRef } from "react";
// a clock with the start ans the stop functionality
const App = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();

  function startClock() {
    let value = setInterval(() => {
      setCurrentCount((count) => count + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    console.log(timer.current);

    clearInterval(timer.current)
  }
  return (
    <div>
      {currentCount}
      <div>
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
      </div>
    </div>
  );
};

export default App;
