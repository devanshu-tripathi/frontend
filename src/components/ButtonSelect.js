import React, { useState } from 'react';
import './ButtonSelect.css';

const ButtonSelect = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };

  return (
    <div className="button-select">
      <button
        className={`button ${selectedButton === 'button1' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('button1')}
      >
       High to Low 
      </button>
      <button
        className={`button ${selectedButton === 'button2' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('button2')}
      >
        Low to High
      </button>
      <button
        className={`button ${selectedButton === 'button3' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('button3')}
      >
        Newest
      </button>
      <button
        className={`button ${selectedButton === 'button4' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('button4')}
      >
        Popular
      </button>
    </div>
  );
};

export default ButtonSelect;
