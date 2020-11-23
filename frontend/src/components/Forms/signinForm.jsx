import React,{useState} from 'react';

import TextField from '@material-ui/core/TextField';

import Btn from '../Btn/btn';

import {Signin} from '../../config/firebase';

const SigninForm =(props)=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [psswd,setPsswd] = useState('');

    return(
        <div className='form-holder' title='signin-form'>
            <span className='label'>Registrate</span>
            <div className='txtFields'>
                <TextField label='Nombres' value={name} placeholder='Juan Perez' onChange={(e)=>{setName(e.target.value)}}/>
                <TextField label='Correo Electronico' value={email} placeholder='correo@example.co' onChange={(e)=>{setEmail(e.target.value)}}/>
                <TextField label='Contraseña' value={psswd}  onChange={(e)=>{setPsswd(e.target.value)}} type="password"/>
            </div>
            <Btn label={'Registrate'} styles={'alt-2'} onClick={()=>{
                let nameTemp = name;
                Signin(email, psswd,name,props.setAppMsg);
                
                props.setUser(nameTemp);
                setName('');
                setEmail('');
                setPsswd('');
                props.setModal('');
            }}/>
        </div>
    );
}

export default SigninForm;