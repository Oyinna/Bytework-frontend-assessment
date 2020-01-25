import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import TopmenuItems from '../Topmenu/TopmenuItems/TopmenuItems';

const sideDrawer = (props) => {   
    // ..
    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <TopmenuItems/>
            </nav>
        </div>
    );
    };

export default sideDrawer;