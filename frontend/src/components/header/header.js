import React from 'react';

import logo from '../../assets/images/logo.png';

const Header = () =>{

    return(
      <header title="header" className="header">
        <img src={logo} alt='treinta-logo' className='logo'/>
      </header>
    );
   
};


export default Header;