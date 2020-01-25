import React from 'react';
import classes from './Footer.css'

const footer = () =>(
<footer className={classes.footer}>
    <div className={classes.closure}>
        <div className={classes.FirstDiv}>
            Never miss the action from your winning team
        </div>
        <div className={classes.SecondDiv}>
            <button className={classes.FooterButton}>EXPORE</button>
        </div>
    </div>
    <div className={classes.closure}>
        <div className={classes.ThirdDiv}>
        <table className={classes.tables}>
            <thead>
                <tr>
                    <th>ABOUT US</th>
                    <th>INFORMATION</th>
                    <th>SUPPORT</th>
                    <th>SUPPORT</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                      <td>Latest News</td>
                      <td>Olympics</td>
                      <td>Terms and Conditions</td>
                      <td>Terms and Conditions</td>
                    </tr>
                    <tr>
                      <td>Players Room</td>
                      <td>Fifa 2019</td>
                      <td>Privacy Policy</td>
                      <td>Privacy Policy</td>
                    </tr>
                    <tr>
                      <td>Media Gallery</td>
                      <td>NFL 2019</td>
                      <td>Sitemap</td>
                      <td>Sitemap</td>
                    </tr>
                    <tr>
                      <td>Feedback</td>
                      <td>NBA 2019</td>
                      <td>FAQ</td>
                      <td>FAQ</td>
                    </tr>
                    <tr>
                      <td>Contact Us</td>
                      <td>Boxing</td>
                      <td>Account</td>
                      <td>Account</td>
                    </tr>
            </tbody>
          </table>
        </div>
        <div className={classes.ForthDiv}>
            <button className={classes.FooterButton}>EXPORE</button>
        </div>
    </div>
    <div className={classes.closure}>
        <div className={classes.dv}>
            @ All rights Reserved 2019
        </div>
        <div className={classes.dvv}></div>
    </div>
</footer>
);

export default footer;