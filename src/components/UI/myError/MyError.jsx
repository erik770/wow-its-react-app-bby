import React, {useEffect} from 'react';
import classes from './MyError.module.scss';
import {Link} from "react-router-dom";

const MyError = () => {
  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = "https://kit.fontawesome.com/4b9ba14b0f.js";
    scriptTag.async = true;

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    }
  }, []);

  return (
    <div className={classes['error-wrapper']}>
      <div className={classes.error}>
        <div className={classes.error__numbers}>
          <span>4</span>
          <span className={['far', 'fa-question-circle', 'fa-spin', classes['zero-spin']].join(' ')} ></span>
          <span>4</span>
        </div>
        <div className={classes.error__text}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
          the first
          place?<p>Let's go <Link to="/posts">home</Link> and try from there.</p></div>
      </div>
    </div>
  );
};

export default MyError;