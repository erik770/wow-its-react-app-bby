import React from 'react';
import classes from "../components/UI/myError/MyError.module.scss";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import '../styles/about.scss';

const About = () => {
  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = "https://kit.fontawesome.com/99b107e3e1.js";
    scriptTag.async = true;

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    }
  }, []);

  return (
    <div className='about-wrapper'>
      <div className='about'>
        <div className='about__icon'>
          <i className="fa-solid fa-seedling"></i>
        </div>

        <div className='about__text'>
          Hello everyone! This is my first time writing an application using the React library. In this application, I
          tried to put most
          of my knowledge about React into practice. I practiced creating and using various components and hooks
          (useState, useEffect, useMemo, useRef, useContext, useFetching, usePosts) used decomposition in almost
          all places, which makes it easy to expand the functionality of this application. Also, the component approach
          used here allows me to reuse my components, which I actively did during development. I also learned
          how to use devtools for react applications, and got acquainted with react router.
          <h4>Let's go <Link
            to="/posts">mainpage</Link> and look at the result of my labors.</h4></div>
      </div>
    </div>
  );
};

export default About;