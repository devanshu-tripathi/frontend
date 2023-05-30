import React, { useState } from 'react';
import './CheckboxButton.css';
import Comp from './comp';
//import './uppersecc.css'

const CheckboxButton = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Checkbox 1', checked: false },
    { id: 2, label: 'Checkbox 2', checked: false },
    { id: 3, label: 'Checkbox 3', checked: false },
    { id: 4, label: 'Checkbox 4', checked: false }
  ]);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, checked: !checkbox.checked };
      }
      return checkbox;
    });

    setCheckboxes(updatedCheckboxes);
    setSelectAll(updatedCheckboxes.every((checkbox) => checkbox.checked));
  };

  const handleSelectAll = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectAll
    }));

    setCheckboxes(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleButtonClick = () => {
    const selectedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
    console.log('Selected checkboxes:', selectedCheckboxes);
  };

  return (
    <div className="checkbox-button">
      <div className="checkbox-group">
        <label className="checkbox-label1">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          Select All
        </label>
       
        {checkboxes.map((checkbox) => (
            
          <label className="checkbox-label" key={checkbox.id}>
        
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
              <Comp/>
         
          </label>
          

        ))}
      </div>
     
    </div>
  );
};

export default CheckboxButton;
