import React from 'react';


import routes from '../../context/routes.json';

import { useHistory } from "react-router-dom";


const NavBar = (props) =>{

    let history = useHistory();

    

    return(<nav title='navBar' className='navbar'>
        {
             routes.routes.map((el,i)=>{
                let active = props.route !== el.path;
                
                return(
                    <div 
                    key={`navbar-${i}`} 
                    className={`route ${active ? 'noPressed' : ''}`}
                    onClick={()=>{
                        if(active){
                            history.push(routes.routes[i].path);
                            props.setRoute(routes.routes[i].path);
                        }
                    }}
                    >{el.name}</div>
                );
               
            })
        }
    </nav>);
}


export default NavBar;