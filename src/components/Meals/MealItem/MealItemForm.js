import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const addItemHandler = (event) => {
    event.preventDefault();
    const itemAmount = inputRef.current.value;

    if (
      itemAmount.length === 0 ||
      parseInt(itemAmount.value) < 1 ||
      parseInt(itemAmount.value) > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(itemAmount);
    inputRef.current.value = "1";
  };

  const input = {
    id: props.id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={classes.form}>
      <Input label="Amount" input={input} ref={inputRef} />
      <button onClick={addItemHandler}>+ Add</button>
      {!amountIsValid && "Please enter a valid amount (1-5)"}
    </form>
  );
};

export default MealItemForm;
