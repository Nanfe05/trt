import React,{useState} from 'react';

import TextField from '@material-ui/core/TextField';

import Btn from '../Btn/btn';

import {Login} from '../../config/firebase';

const LoginForm =(props)=>{

    const [email,setEmail] = useState('');
    const [psswd,setPsswd] = useState('');

    return(
        <div className='form-holder' title='login-form'>
            <span className='label'>Ingresa</span>
            <div className='txtFields'>
                <TextField label='Correo Electronico' value={email} placeholder='correo@example.co' onChange={(e)=>{setEmail(e.target.value)}}/>
                <TextField label='Contraseña' value={psswd}  onChange={(e)=>{setPsswd(e.target.value)}} type="password"/>
            </div>
            <Btn label={'Ingresa'} styles={'alt-2'} onClick={()=>{
                Login(email,psswd,props.setAppMsg);
                setEmail('');
                setPsswd('');
                props.setModal('');
                
            }}/>
        </div>
    );
}

export default LoginForm;