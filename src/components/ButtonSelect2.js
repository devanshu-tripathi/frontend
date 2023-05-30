import React, { useState } from 'react';
import './ButtonSelect.css';

const ButtonSelect = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
  };

  return (
    <div className="button-select2">
    
      <button
        className={`button ${selectedButton === 'selected' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('selected')}
      >
        INVITE
      </button>
      <button
        className={`button ${selectedButton === 'unselected' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('unselected')}
      >
       ADD CAMPAIGN
      </button>
    </div>
  );
};

export default ButtonSelect;
