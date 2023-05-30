import React, { useState } from 'react';
import './checkboxes.css';
import RangeInputsComponent from './rangeInputs';
const Checkbox1 = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (
    <div className="container">
      <h3>POPULARITY</h3>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
        Nano (1k-9k)
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
        Micro (100k-999k)
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
        Macro (1M-10M)
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
        Custom
      </label>
      <RangeInputsComponent />
    </div>
  );
};

export default Checkbox1;
