import React from 'react';

import logo from '../../assets/images/logo.png';

import LogManager from '../LogManager/logManager';
import NavBar from '../NavBar/navBar';

const Header = (props) =>{

    return(
      <>
        <header title="header" className="header">
          <img src={logo} alt='treinta-logo' className='logo'/>
          <LogManager/>
        </header>
        <NavBar route={props.route} setRoute={props.setRoute}/>
      </>
    );
   
};


export default Header;