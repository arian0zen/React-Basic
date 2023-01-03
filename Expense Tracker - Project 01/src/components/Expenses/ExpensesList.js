import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  let expenseArrayContent = (
    <p className="no_expense_found">No Expense in this year ⌛📌</p>
  );

  if (props.expenses.length === 0) {
    return expenseArrayContent;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
