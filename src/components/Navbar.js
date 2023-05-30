
import React from 'react';
import './navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import myImage from '../img/t.jpeg';


function NavBar() {
  return (
    <nav className="navbar">
    <div >
    <a href="#"  rel="noopener noreferrer">
    <img src={myImage} className='left'/>
    </a>
    </div>
     <div className='middle'>
       <a href="/" style={{ textDecoration: 'none',marginRight: '30px'  }}>Home   </a>
       <a href="/about" style={{ textDecoration: 'none' }}>My Campagin</a>
        
      </div>
      <div className="right">
        <NotificationsIcon/>
         <AccountCircleIcon />
        
      </div>
      
    </nav>
  );
  }
export default NavBar; 

{/*
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src="../img/t.jpeg" alt="Logo" className="logo" />
        <h2 className="heading">Home</h2>
        <h2 className="heading">Campaign</h2>
      </div>
      <div className="right-section">
        <div className="icons">
          <NotificationsIcon className="icon" />
          <AccountCircleIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
*/}
