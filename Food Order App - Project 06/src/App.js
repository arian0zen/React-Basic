import React from "react";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";
import OrderForm from "./components/OrderForm/Order";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderForm, setOrderForm] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const cartOrderHandler = ()=>{
    console.log('Ordering...');
    setCartIsShown(false);
    setOrderForm(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const hideFormHandler = ()=>{
    setOrderForm(false);
  };

  return (
    <CartProvider>
      {orderForm && <OrderForm onCancelOrder={hideFormHandler} />}
      {cartIsShown && <Cart onCloseCart={hideCartHandler} onOrder={cartOrderHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
