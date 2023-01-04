import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  let current_year = new Date().getFullYear().toString();
  let max_date = current_year + "-12-31";

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredTitle: event.target.value,
    //       }
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredAmount: event.target.value,
    //       }
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredDate: event.target.value,
    //       }
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const NewExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(NewExpenseData);
    // setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="1"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max={max_date}
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button
            className="cancel_button"
            type="button"
            onClick={props.onCancel}
          >❌
          </button>
          <button className="add_button" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
