import React, { forwardRef } from "react";
import classes from "./Input.module.css";

const InputRef = (props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
};

const Input = forwardRef(InputRef);
export default Input;
