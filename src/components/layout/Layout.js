import React from 'react';

import AuxC from '../../hoc/AuxC';
import classes from './Layout.css';

const layout = (props) => (
        // eslint-disable-next-line no-unused-expressions
        <AuxC>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.MainPart}>
                {props.children}
            </main>
        </AuxC>
);

export default layout;