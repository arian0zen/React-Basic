import React, { useState, useRef, useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Order.module.css";
import CartContext from "../../store/cart-context";

const OrderForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(true);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const OrderHandler = async (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    if (!enteredName || !enteredStreet || !enteredPostal || !enteredCity) {
      setIsFormValid(false);
      return;
    }
    const orderAddress = {
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    };
    const orderDetails = {
      address: orderAddress,
      items: cartCtx.items,
    };
    if(cartCtx.items.length === 0){
        setError("Please add items to cart");
        return;
    };
    try {
      await fetch(
        "https://learn-react001-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(orderDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess("Order Placed Successfully");
      cartCtx.clearCart();
      nameInputRef.current.value = "";
      streetInputRef.current.value = "";
      postalInputRef.current.value = "";
      cityInputRef.current.value = "";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal onBackdropClick={props.onCancelOrder}>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInputRef} />
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCancelOrder}
          >
            Close
          </button>
          <button
            type="submit"
            className={classes.button}
            onClick={OrderHandler}
          >
            Order
          </button>
        </div>
        <div className="feedback">
          {!isFormValid && (
            <p className={classes.error}>
              Please enter a valid name and address
            </p>
          )}
          {error && <p className={classes.error}>{error}</p>}
          {success && <p className={classes.success}>{success}</p>}
        </div>
      </form>
    </Modal>
  );
};

export default OrderForm;
