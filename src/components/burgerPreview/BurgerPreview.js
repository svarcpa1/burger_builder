import React from 'react';

import classes from './BurgerPreview.css';
import BurgerIngredient from './burgerIngredient/BurgerIngredient'

const burgerPreview = (props) => {
    return (
        <div className={classes.BurgerPreview}>
            <BurgerIngredient type="BreadTop"/>
            <BurgerIngredient type="Meat"/>
            <BurgerIngredient type="BreadBottom"/>
        </div>
    );
};

export default burgerPreview;