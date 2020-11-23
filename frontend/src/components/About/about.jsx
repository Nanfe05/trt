import React from 'react';

import imgPhone from '../../assets/images/phone-treinta.png';


import advantages from '../../context/ventajas.json';

const Acard = (props) =>{
    return(<div className='advantage-card'>    
        <img src={props.url} alt='icono'/>
        <p className='title'>{props.title}</p>
        <p className='desc'>{props.desc}</p>
    </div>);
}

const About = () =>{
    return(<div title='about-page' className='about-page'>
        <img src={imgPhone} alt='phone-image' className='img'/>
        <div className='txt-holder'>
            <p className='title'>Treinta - ¡Aplicación financiera gratuita!</p>
            <p className='desc'>Gestiona las transacciones de tu negocio, conoce la utilidad de tu negocio en cualquier momento y registra y cobra deudas 3 veces más eficazmente.</p>
            <p className='desc'>Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera gratuita. ¡Treinta es gratis, seguro y fácil de usar!</p>
            <p className='title'>Descubre las ventajas de usar Treinta</p>
            <p className='desc'>Treinta ofrece más que la comodidad de administrar y monitorear los estados financieros de tu empresa a través de un smartphone.</p>
            <div className='advantage-holder'>
                {advantages.map((el,i)=><Acard title={el.title} url={el.url} desc={el.desc} key={`card-advantage-${i}`}/>
                )}
            </div>
        </div>
    </div>);
}


export default About