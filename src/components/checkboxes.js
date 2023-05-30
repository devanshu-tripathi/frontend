import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './checkboxess.css';

const CheckboxComponent = ({ heading, checkbox1Name, checkbox2Name }) => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="container">
      <h3>{heading}</h3>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
        {checkbox1Name}
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
          className="checkbox"
        />
        {checkbox2Name}
      </label>
    </div>
  );
};

CheckboxComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  checkbox1Name: PropTypes.string.isRequired,
  checkbox2Name: PropTypes.string.isRequired,
};

export default CheckboxComponent;
