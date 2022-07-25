import React from "react";
import classes from './MyInput.module.scss';

export const MyInput = function (props) {
    

    return (
        <input className={classes.myInput} {...props}></input>
    )
}