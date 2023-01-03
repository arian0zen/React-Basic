import React, { useState } from "react"; //though we are not using it here, but in the past we used to use it to convert the jsx code into react code
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
let current_year = new Date().getFullYear().toString();

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(current_year);
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onchangeFilter={filteredChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>

      <ExpensesList expenses={filteredExpenses}/>

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      /> */}
    </Card>
  );
}

export default Expenses;
