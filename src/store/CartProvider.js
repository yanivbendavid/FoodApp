import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingItemIndex = state.items.findIndex((i) => {
        return i.id === action.item.id;
      });
      const existingCartItem = state.items[existingItemIndex];
      let updatedItems = [...state.items];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "REMOVE":
      const cartItemIndex = state.items.findIndex((i) => {
        return i.id === action.id;
      });
      const cartItem = state.items[cartItemIndex];
      const itemsTotalAmount = state.totalAmount - cartItem.price;
      let currentItems;

      if (cartItem.amount === 1) {
        currentItems = state.items.filter((i) => i.id !== action.id);
      } else {
        const updatedItem = { ...cartItem, amount: cartItem.amount - 1 };
        currentItems = [...state.items];
        currentItems[cartItemIndex] = updatedItem;
      }

      return { items: currentItems, totalAmount: itemsTotalAmount };

    default:
      return initialCartState;
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
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount && cartState.totalAmount.toFixed(2),
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
