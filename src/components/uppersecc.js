import { ClassNames } from '@emotion/react';
import React from 'react';
import './uppersec.css';
import { Button } from '@mui/material';
import ButtonSelect from './ButtonSelect';
import ButtonSelect2 from './ButtonSelect2';

const Uppersecc = () => {
  return (
    < div className='header'>
       <div>sort by</div>
       <div className='left'>
       <ButtonSelect />   
       </div>
       <div className='right'>
       <ButtonSelect2/>

       </div>
    </div>
  );
};

export default Uppersecc;
