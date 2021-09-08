import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const setCartVisibilityHandler = (value) => {
    setCartIsVisible(value);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onSetCartVisibility={setCartVisibilityHandler} />}
      <Header onSetCartVisibility={setCartVisibilityHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
