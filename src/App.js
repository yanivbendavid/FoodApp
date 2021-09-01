import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const setCartVisibilityHandler = (value) => {
    setCartIsVisible(value);
  };

  return (
    <>
      {cartIsVisible && <Cart onSetCartVisibility={setCartVisibilityHandler} />}
      <Header onSetCartVisibility={setCartVisibilityHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
