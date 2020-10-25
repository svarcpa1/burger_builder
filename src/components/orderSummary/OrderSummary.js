import React from 'react';

import classes from './OrderSummary.css';
import AuxC from '../../hoc/AuxC';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    {igKey}:  {props.ingredients[igKey]}
                </li>
            )
        });
    return (
        <AuxC>
            <h3>Your Order</h3>
            <p>You are about to order burger with following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>continue to checkout?</p>
        </AuxC>
    )
}

export default orderSummary;