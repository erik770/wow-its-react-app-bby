import React from 'react';
import classes from './Navbar.module.scss';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__trapezoid}>
        <Link to="/about" className={classes.navbar__item}> About </Link>
        <Link to="/posts" className={classes.navbar__item}> Posts </Link>

      </div>
    </nav>
  );
};

export default Navbar;