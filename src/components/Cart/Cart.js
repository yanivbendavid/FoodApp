import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "id1", name: "aaa", amount: "dddd", price: 12 }].map(
    (i) => <li key={i.id}>{i.name}</li>
  );

  return (
    <Modal onSetCartVisibility={props.onSetCartVisibility}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>-5555</span>
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
