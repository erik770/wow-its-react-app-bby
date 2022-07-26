import React from "react";
import classes from './MySelect.module.scss'

export const MySelect = function ({options, defaultValue, value, onChange}) {
  return (
    <div className={classes.select}>
      <select
        id='standard-select'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled value="">{defaultValue}</option>
        {options.map((option) => <option key={option.value} value={option.value}>{option.name}</option>)}
      </select>
      <span className={classes.focus}></span>
    </div>
  )
}