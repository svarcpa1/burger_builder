import React, {Component} from 'react';

import AuxC from '../../hoc/AuxC';
import BurgerPreview from '../../components/burgerPreview/BurgerPreview'

class Burger extends Component {
    render () {
        return (
            <AuxC>
                <BurgerPreview/>
                <div>controls</div>
            </AuxC>
        );
    }
}

export default Burger;

