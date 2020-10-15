import React, {Component} from 'react';

import AuxC from '../../hoc/AuxC';
import BurgerPreview from '../../components/burgerPreview/BurgerPreview'

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
        }
    }
    
    render () {
        return (
            <AuxC>
                <BurgerPreview ingredients={this.state.ingredients}/>
                <div>controls</div>
            </AuxC>
        );
    }
}

export default Burger;

