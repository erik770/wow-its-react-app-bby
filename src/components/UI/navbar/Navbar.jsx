import React from 'react';
import classes from './Navbar.module.scss';
import {Link} from "react-router-dom";
import Posts from "../../../pages/Posts";
import About from "../../../pages/About";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div id="trapezoid" className={classes.trapezoid}>
        <Link to="/about" className={classes.navbar__item}> About </Link>
        <Link to="/posts" className={classes.navbar__item}> Posts </Link>
        {/*<a className={classes.navbar__item}>Clients</a>*/}
        {/*<a href="https://codepen.io/pec-man" className={classes.navbar__item}>Contact</a>*/}
      </div>
    </nav>
  );
};

export default Navbar;