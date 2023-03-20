import React from "react";
import mealsImage from '../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton.js';
import classes from './Header.module.css'
const Header = (props) => {
  return <React.Fragment>

    <header className={classes.header}>
        <h1>React to Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
        <img src="https://source.unsplash.com/random/1920x1080/?food" alt="A table full of delicious food!"></img>
    </div>
  </React.Fragment>;
};

export default Header;
