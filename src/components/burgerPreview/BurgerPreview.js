import React from 'react';

import classes from './BurgerPreview.css';
import BurgerIngredient from './burgerIngredient/BurgerIngredient'

const burgerPreview = (props) => {
    
    let transformedIngredient = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey+i} type={ingredientKey}/>
            })
        })
        .reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue);
        }, []);

    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>Please, add something!</p>;
    }

    return (
        <div className={classes.BurgerPreview}>
            <BurgerIngredient type="BreadTop"/>
            {transformedIngredient}
            <BurgerIngredient type="BreadBottom"/>
        </div>
    );
};

export default burgerPreview;