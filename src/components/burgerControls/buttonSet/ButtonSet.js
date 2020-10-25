import React from 'react';
import classes from './ButtonSet.css';

const buttonSet = (props) => (

    <div className={classes.ButtonSet}>
        <div className={classes.Label}>{props.ingredientLabel}:</div>
        <button 
            className={classes.More} 
            onClick={props.added}>+</button>
        <button 
            className={classes.Less} 
            onClick={props.removed}
            disabled={props.disabled}>-</button>
        <div> (+/- {props.ingredientPrice} CZK)</div>
    </div>
);

export default buttonSet;