import React from 'react';

import classes from './Modal.css';
import AuxC from '../../../hoc/AuxC';
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <AuxC>
        <Backdrop show={props.show} clicked={props.modalClose}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? "1" : "0",
            }}>
                {props.children}
        </div>
    </AuxC>

)

export default modal;