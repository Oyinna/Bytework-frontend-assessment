import React from 'react';
import classes from './Navbar.css';
// import TopmenuItems from '../Topmenu/TopmenuItems/TopmenuItems';

const dropdown = () => (
    <div className={classes.Dropdown}>
        <table className={classes.tables}>
            <thead>
                <tr>
                    <th className={classes.fr}>Column 1</th>
                    <th className={classes.fr}>Column 2</th>
                    <th className={classes.fr}>Column 3</th>
                    <th className={classes.fr}>Column 4</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                      <td> <a href="#" className={classes.aa}>Some Link Title</a> </td>
                      <td> <a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                    </tr>
                    <tr>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                    </tr>
                    <tr>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                    </tr>
                    <tr>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                    </tr>
                    <tr>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                      <td><a href="#" className={classes.aa}>Some Link Title</a></td>
                    </tr>
            </tbody>
          </table>
    </div>
);

export default dropdown