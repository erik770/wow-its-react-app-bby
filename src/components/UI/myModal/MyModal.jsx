import React from "react";
import classes from "./MyModal.module.scss"

export const MyModal = function ({ children, visible, setVisibility }) {
    const rootClasses = [classes.modal]
    if (visible) {
        rootClasses.push(classes.modal_active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisibility(false)}>
            <div className={classes.modal__content} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}