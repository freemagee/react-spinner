import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Spinner } from "./Spinner";
import { Duration } from "./Duration";

import "./styles.css";

function App() {
  const [duration, extendDuration] = useState(3000);
  function handleClick() {
    const newDuration = Math.random() * (3000 - 1000) + 1000;
    const roundTo100 = Math.ceil((newDuration + 1) / 100) * 100;
    extendDuration(roundTo100);
  }

  return (
    <div id="App">
      <Spinner duration={duration} size={100} thickness={16} fill="#ffffff" />
      <button type="button" id="extend" onClick={handleClick}>
        Extend duration
      </button>
      <Duration duration={duration} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
