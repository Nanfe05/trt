import React from 'react';
import Btn from '../Btn/btn';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {LogOut} from '../../config/firebase';

const IfUser = (props) =>(
    <div className='ifUser'>
        <span className='userTag'>Hola {props.user} !</span>
        <Btn label='Salir' icon={<ExitToAppIcon/>} onClick={()=>{
            LogOut(props.setAppMsg);
            props.setUser('');
           
        }}/>
    </div>
);

const NoUser = (props) =>(
    <div>
        <Btn label='Registrate' onClick={()=>{
            props.setModal('signin');
        }}/>
        <Btn label='Ingresa' styles='alt-1' onClick={()=>{
            props.setModal('login');
        }}/>
        
    </div>
);



const LogManager = (props) =>{

    return(
        <div title='LogManager'>
            {props.user ? <IfUser user={props.user} {...props} />:<NoUser {...props}/>}
        </div>
    );
}


export default LogManager;