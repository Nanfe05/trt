import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';


const Toast = (props) =>{

    return(
        <Snackbar
        open={props.appMsg ? true : false}
        autoHideDuration={3500}
        onClose={()=>props.setAppMsg('')}
        anchorOrigin={{
            vertical:'top',
            horizontal:'center'
        }}
        className='toast-holder'
        >
            <div title='toast' className='toast'>
                {props.appMsg && props.appMsg}
            </div>
        </Snackbar>

    );
};



export default Toast;