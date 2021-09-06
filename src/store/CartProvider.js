import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return { items: updatedItems, totalAmount: updatedTotalAmount };

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const onAddItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const onRemoveItem = (id) => {
    dispatchCartAction({ type: "Remove", id: id });
  };

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: onAddItem,
    removeItem: onRemoveItem,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
