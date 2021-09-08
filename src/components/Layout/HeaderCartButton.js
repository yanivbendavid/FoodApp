import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const cartItemsCount = cartContext.items.reduce((currentCount, item) => {
    return currentCount + item.amount;
  }, 0);

  const [buttonAnimate, setButtonAnimate] = useState(false);
  const buttonClasses = `${classes.button} ${buttonAnimate && classes.bump}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonAnimate(true);
    const timer = setTimeout(() => {
      setButtonAnimate(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartContext.items]);

  return (
    <button
      className={buttonClasses}
      onClick={() => {
        props.onSetCartVisibility(true);
      }}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
