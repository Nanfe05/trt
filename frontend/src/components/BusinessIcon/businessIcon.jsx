import React,{useState} from 'react';

import icon from '../../assets/images/b-icon.png';

import Popover from '@material-ui/core/Popover';

const BusinessIcon = (props) =>{

    const [anchorEl, setAnchorEl] =useState(null);

    return(
        <>
        <div title='business-icon' className='b-icon' onClick={(e)=>{
            setAnchorEl(e.currentTarget);
        }}>
            <img src={icon} alt='business-icon'/>
        </div>
        <Popover
            open={anchorEl ? true : false}
            anchorEl={anchorEl}
            onClose={()=>setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
        >
            <div className='additional-info'>
                <span className='name'>{props.element.name}</span>
                <span className='desc'>{props.element.desc}</span>
            </div>
        </Popover>
        </>
    );
}


export default BusinessIcon;