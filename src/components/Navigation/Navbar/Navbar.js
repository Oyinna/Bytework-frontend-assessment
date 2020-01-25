import React from 'react';
import classes from './Navbar.css';
import Dropdown from './Dropdown';
// import TopmenuItems from '../Topmenu/TopmenuItems/TopmenuItems';

const navbar = (props) => (
    <div className={classes.Navbar}>
        <ul>
            <li>
                <a href="/home" active className={props.active ? classes.active : null}>
                    LIGA
                </a>
                <Dropdown />
            </li>
            <li>
                <a href="/home" active className={props.active ? classes.active : null}>
                    UEFA
                </a>
                <Dropdown />
            </li>
            <li>
                <a href="/home" active className={props.active ? classes.active : null}>
                    EPL
                </a>
                <Dropdown/>
            </li>
            <li>
                <a href="/home" active className={props.active ? classes.active : null}>
                    SUPER CUP
                </a>
                <Dropdown/>
            </li>
            <li className={classes.TopmenuItem}>
                <a href="/home" active className={props.active ? classes.active : null}>
                    WORLD CUP
                </a>
                <Dropdown/>
            </li>
            <li>
                <a href="/home" active className={props.active ? classes.active : null}>
                    NPL
                </a>
                <Dropdown/>
            </li>
            <li>
                <a href="/home" active className={props.active ? classes.active : null}>
                    PREMIER LEAGUE
                </a>
                <Dropdown/>
            </li>
            <li>
                <a href="/home" active className={props.active ? classes.active : null}>
                    search 
                </a>
                <Dropdown/>
            </li>
            <li>
                <a href="/home" active className={props.active ? classes.active : null}>
                    
                </a> 
                <Dropdown/>
            </li>
        </ul>
    </div>
);

export default navbar