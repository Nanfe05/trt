import React from 'react';

import Button from '@material-ui/core/Button';

const Btn = (props) =>{
    return (
        <Button className={`treinta-btn ${props.styles ? props.styles :''}`} onClick={props.onClick} >
            {props.label}
        </Button>
    );
}

export default Btn;