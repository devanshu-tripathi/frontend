import React from 'react';
import './sectionLeft.css';
//import { Checkbox } from '@mui/material';
import Checkbox1 from './checkbox';
import CheckboxComponent from './checkboxes';

function SectionLeft() {
    return (
        <div className='leftside'>
            <Checkbox1/>

            <CheckboxComponent heading="CAMPAIGN PREFERENCE" checkbox1Name="Barter" checkbox2Name="Paid" />
            <CheckboxComponent heading="PLATFORM" checkbox1Name="Youtube" checkbox2Name="Instagram" />


        </div>
    );
}

export default SectionLeft;