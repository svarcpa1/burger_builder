import React from 'react';
import ButtonSet from './buttonSet/ButtonSet';

import classes from './BurgerControls.css';

const burgerControls = (props) => (

    <div className={classes.BurgerControls}>
        {props.ingredientsList.map(ing => (
            <ButtonSet 
                key={ing} 
                ingredientLabel={ing}
                added={() => props.ingredientAdded(ing)}
                removed={() => props.ingredientRemoved(ing)}
            />
        ))}
    </div>
);

export default burgerControls;