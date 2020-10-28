import React from 'react';

import classes from './Button.css';

const button = (props) => (
    //adding classes
    //button class for every button, the according to props (Danger or Success)
    //has to be String
    <button onClick={props.clicked} className={[classes.Button, classes[props.buttonType]].join(' ')}> {props.children} </button>
);

export default button;