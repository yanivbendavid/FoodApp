import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    cartContext.addItem(cartItem);
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = cartContext.items.map((i) => (
    <CartItem
      onAdd={cartItemAddHandler.bind(null, i)}
      onRemove={cartItemRemoveHandler.bind(null, i.id)}
      key={i.id}
      name={i.name}
      amount={i.amount}
      price={i.price}
    />
  ));

  return (
    <Modal onSetCartVisibility={props.onSetCartVisibility}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$ ${cartContext.totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => {
            props.onSetCartVisibility(false);
          }}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
