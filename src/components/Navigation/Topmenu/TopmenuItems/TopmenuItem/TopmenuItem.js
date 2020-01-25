import React from 'react';
import classes from './TopmenuItem.css'

const topmenuItem = (props) => (   
    <li className={classes.TopmenuItem}>
        <a href={props.link} className={props.active ? classes.activ : null}>
            {props.children}</a>
    </li>
);

export default topmenuItem;