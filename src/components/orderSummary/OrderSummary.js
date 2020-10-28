import React from 'react';

import classes from './OrderSummary.css';
import AuxC from '../../hoc/AuxC';
import Button from '../UI/Button/Button';

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
            <Button clicked={props.cancelHandler} buttonType="Danger">Cancel</Button>
            <Button clicked={props.continueHandler} buttonType="Success">Continue</Button>
        </AuxC>
    )
}

export default orderSummary;