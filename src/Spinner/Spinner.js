import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

Spinner.propTypes = {
  duration: PropTypes.number.isRequired,
  size: PropTypes.number,
  thickness: PropTypes.number,
  fill: PropTypes.string
};

Spinner.defaultProps = {
  size: 100,
  thickness: 16,
  fill: "#ffffff"
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Wrapper = styled.div`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-top: ${props => props.thickness}px solid ${props => props.fill}33;
  border-right: ${props => props.thickness}px solid ${props => props.fill}33;
  border-bottom: ${props => props.thickness}px solid ${props => props.fill}33;
  border-left: ${props => props.thickness}px solid ${props => props.fill};
  border-radius: 50%;
  visibility: ${props => (props.isVisible ? "visible" : "hidden")}
  transform: translateZ(0);
  animation: ${rotate} 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
`;

function Spinner({ duration, size, thickness, fill }) {
  const [spinnerDuration, setSpinnerDuration] = useState([]);
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    setSpinnerDuration(currentDurations => [...currentDurations, duration]);
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
    <Wrapper
      isVisible={isVisible}
      size={size}
      thickness={thickness}
      fill={fill}
    />
  );
}

export default Spinner;
