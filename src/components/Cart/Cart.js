import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = [{ id: "id1", name: "Item 1", amount: 2, price: 12 }].map(
    (i) => <li key={i.id}>{i.name}</li>
  );

  return (
    <Modal onSetCartVisibility={props.onSetCartVisibility}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartContext.totalAmount}</span>
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
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
