import React from 'react';
import Btn from '../Btn/btn';


const IfUser = (props) =>(
    <div>
        <span>{props.user}</span>
        <Btn label='Salir'/>
    </div>
);

const NoUser = () =>(
    <div>
        <Btn label='Registrate'/>
        <Btn label='Ingresa' styles='alt-1'/>
    </div>
);



const LogManager = (props) =>{

    return(
        <div title='LogManager'>
            {props.user ? <IfUser user={props.user}/>:<NoUser/>}
        </div>
    );
}


export default LogManager;