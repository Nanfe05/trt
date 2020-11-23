import React from 'react';

import Modal from '@material-ui/core/Modal';

import SigninForm from '../../components/Forms/signinForm';
import LoginForm from '../../components/Forms/loginForm';

const LogModal = (props) =>{

    const content = props.modal && props.modal === 'login' ? <LoginForm setModal={props.setModal} setUser={props.setUser} setAppMsg={props.setAppMsg}/> : 
    <SigninForm setModal={props.setModal} setUser={props.setUser} setAppMsg={props.setAppMsg}/>;

    return(<Modal 
        open={props.modal ? true:false}
        onClose={()=>props.setModal('')}
    >
        <div title='modal' className='modal-holder'>
            {content}
        </div>
    </Modal>);
}


export default LogModal;