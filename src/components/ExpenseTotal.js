// ExpenseTotal.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  // Format totalExpenses with 2 decimal places
  const formattedTotalExpenses = totalExpenses.toFixed(2);

  return (
    <div className='alert alert-primary'>
      <span>Spent so far: </span>
      <span>
        {currency} {/* Display the selected currency symbol */}
        {formattedTotalExpenses}
      </span>
    </div>
  );
};

export default ExpenseTotal;

