import React, {Component} from 'react';

import AuxC from '../../hoc/AuxC';
import BurgerPreview from '../../components/burgerPreview/BurgerPreview';
import BurgerControls from '../../components/burgerControls/BurgerControls';

const INGREDIENT_PRICES = {
    Salad: 15,
    Bacon: 20,
    Cheese: 20,
    Meat: 35
}

class Burger extends Component {
    /*constructor (props) {
        super(props);
        this.state = {}
    }*/

    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat:0
        },
        totalPrice: 80
    }

    addIngredientHandler = (type) => {
        //immutable way of editing state
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        const ingredientPriceAddition = INGREDIENT_PRICES[type];
        const newTotalPrice = ingredientPriceAddition + this.state.ingredients.totalPrice;

        this.setState({
            ingredients: updatedIngredients, 
            totalPrice: newTotalPrice
        });
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            //immutable way of editing state
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = this.state.ingredients[type] - 1;

            const ingredientPriceDeduction = INGREDIENT_PRICES[type];
            const newTotalPrice = this.state.ingredients.totalPrice - ingredientPriceDeduction;

            this.setState({
                ingredients: updatedIngredients, 
                totalPrice: newTotalPrice
            });
        } else {
            return;
        }
    }
    
    render () {   
        // creation of: {salad: true, meat: false...}
        let disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        return (
            <AuxC>
                <BurgerPreview ingredients={this.state.ingredients}/>
                <BurgerControls 
                    ingredientsList={Object.keys(this.state.ingredients)}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </AuxC>
        );
    }
}

export default Burger;

