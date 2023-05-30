import React, { useState } from 'react';
import './rangeInputs.css';

const RangeInputsComponent = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxChange = (event) => {
    setMaxValue(event.target.value);
  };

  return (
    <div className="containe1r">
      <div className="input-wrapper1">
        <label className="input-label1">Min:</label>
        <input
          type="range"
          min={0}
          max={100}
          value={minValue}
          onChange={handleMinChange}
          className="range-input1"
        />
        <span>{minValue}</span>
      </div>
      <div className="input-wrapper1">
        <label className="input-label1">Max:</label>
        <input
          type="range"
          min={0}
          max={100}
          value={maxValue}
          onChange={handleMaxChange}
          className="range-input1"
        />
        <span>{maxValue}</span>
      </div>
    </div>
  );
};

export default RangeInputsComponent;
