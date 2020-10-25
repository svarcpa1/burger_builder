import React from 'react';
import ButtonSet from './buttonSet/ButtonSet';

import classes from './BurgerControls.css';

const burgerControls = (props) => (
    <div className={classes.BurgerControls}>
        <p>Current price: <strong>{props.totalPrice}</strong></p>
        {props.ingredientsList.map(ing => (
            <ButtonSet 
                key={ing} 
                ingredientLabel={ing}
                added={() => props.ingredientAdded(ing)}
                removed={() => props.ingredientRemoved(ing)}
                disabled={props.disabled[ing]}
                ingredientPrice={props.ingeredientPrices[ing]}
            />
        ))}
        
        <button className={classes.OrderButton} disabled={!props.purchaseable}>I WANNA EAT</button>
    </div>
);

export default burgerControls;