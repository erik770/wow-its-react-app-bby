import React from 'react';
import classes from './Navbar.module.scss';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <navbar className={classes.navbar}>
      <ul className={classes.navbar__items}>
        <li >
          <Link to="/about" className={classes.navbar__item}> About </Link>
        </li>
        <li >
          <Link to="/posts" className={classes.navbar__item}> Posts </Link>
        </li>
      </ul>
      {/*<div className={classes.navbar__trapezoid}>*/}
      {/*  </div>*/}
    </navbar>
  );
};

export default Navbar;