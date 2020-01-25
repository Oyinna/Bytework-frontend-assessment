import React from 'react';
import classes from './TopmenuItems.css'
import TopmenuItem from './TopmenuItem/TopmenuItem';

const TopmenuItems = () => (
    <ul className={classes.TopmenuItems}>
        <TopmenuItem link="/home" active>Home</TopmenuItem>
        <TopmenuItem link="/home" active>News</TopmenuItem>
        <TopmenuItem link="/home" active>Results</TopmenuItem>
        <TopmenuItem link="/home" active>Tables</TopmenuItem>
        <TopmenuItem link="/home" active>Tips</TopmenuItem>
        <TopmenuItem link="/home" active>features</TopmenuItem>
        <TopmenuItem link="/home" active>About</TopmenuItem>
    </ul>
);

export default TopmenuItems;