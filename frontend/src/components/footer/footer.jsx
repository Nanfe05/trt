import React from 'react';


const Footer = () =>{
    
    const year = new Date().getFullYear();
    
    return(
        <footer title="footer" className='footer'>
            © {year}
        </footer> 
    );
};


export default Footer;