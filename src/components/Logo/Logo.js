import React from 'react';

import appLogo from '../../assets/images/app-logo.PNG';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={appLogo} alt="MyLogo"/>
    </div>
);

export default logo;