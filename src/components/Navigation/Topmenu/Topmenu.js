import React from 'react';
import classes from './Topmenu.css';
import Logo from '../../Logo/Logo';
import TopmenuItems from './TopmenuItems/TopmenuItems';

const topmenu = (props) => (
    <div className={classes.DesktopOnly}>
    <header className={classes.Topmenu}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <TopmenuItems />
    </header>
    </div>
);

export default topmenu