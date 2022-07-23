import React from 'react';
import classes from './MyError.module.css';
import {Link} from "react-router-dom";

const MyError = () => {
  return (
    <div className={classes.error_wrapper}>
      <div className={classes.mainbox}>
        <div className={classes.err}>4 0 4</div>
        {/*<i className="far fa-question-circle fa-spin"></i>*/}
        {/*<div className={classes.err2}>4</div>*/}
        <div className={classes.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
          the first
          place?<p>Let's go <Link to="/posts">home</Link> and try from there.</p></div>
      </div>
    </div>
  );
};

export default MyError;