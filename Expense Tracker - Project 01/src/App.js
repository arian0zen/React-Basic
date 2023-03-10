import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expense/NewExpense';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenseArray, setExpenseArray] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenseArray((prevExpenseArray) => {
      return [expense, ...prevExpenseArray];
    });
  };

  return (
    <div>
      <NewExpense onAddingNewExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenseArray} />
    </div>
  ); 
}

export default App;