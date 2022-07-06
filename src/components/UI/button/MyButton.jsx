import React from "react";
import classes from './MyButton.module.css';

export const MyButton = function ({children, ...props}) {
    return (
        <button className={classes.myBtn} {...props}>
            {children}
        </button>
    )
}