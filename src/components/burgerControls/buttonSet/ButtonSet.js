import React from 'react';
import classes from './ButtonSet.css';

const buttonSet = (props) => (

    <div className={classes.ButtonSet}>
        <div className={classes.Label}>{props.ingredientLabel}:</div>
        <button className={classes.Less} onClick={props.added}>+</button>
        <button className={classes.More} onClick={props.removed}>-</button>
    </div>
);

export default buttonSet;