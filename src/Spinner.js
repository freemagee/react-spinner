import React, { useState, useEffect } from "react";

import "./Spinner.css";

function Spinner({ duration }) {
  const [spinnerDuration, setSpinnerDuration] = useState([]);
  const [isVisible, setVisibility] = useState(false);
  const visibility = isVisible ? "visible" : "hidden";

  useEffect(() => {
    if (typeof duration === "number") {
      setSpinnerDuration([...spinnerDuration, duration]);
    }
  }, [duration]);

  useEffect(() => {
    let timer;
    if (spinnerDuration.length > 1) {
      setVisibility(true);
      timer = setInterval(() => {
        const newDurationArr = spinnerDuration.slice(1);
        setSpinnerDuration(newDurationArr);
      }, spinnerDuration[0]);
    }

    if (spinnerDuration.length === 1) {
      setVisibility(true);
      timer = setInterval(() => {
        setSpinnerDuration([]);
      }, spinnerDuration[0]);
    }

    if (spinnerDuration.length === 0) {
      setVisibility(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [spinnerDuration]);

  return (
    <div className="spinner" style={{ visibility }}>
      Loading...
    </div>
  );
}

export default Spinner;
