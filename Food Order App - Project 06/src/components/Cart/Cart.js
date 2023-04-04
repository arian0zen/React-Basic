import React, { useContext } from "react";
// import { useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const cartTotalAount = cartCtx.totalAmount.toFixed(2);
    
    const cartItemAddHandler = (item)=>{
        cartCtx.addItem({...item, amount: 1});
    };
    const cartItemRemoveHandler = (id)=>{
        cartCtx.removeItem(id);
    };
    
    const cartItems = cartCtx.items.map(item =>{
        return <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}/>
    });
    return (
        <Modal onBackdropClick={props.onCloseCart}>
            <ul className={classes["cart-items"]}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${cartTotalAount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button} onClick={props.onOrder}>Order</button>}
            </div>
        </Modal>
    )
};


export default Cart;