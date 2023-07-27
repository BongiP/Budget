// Remaining.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remainingBudget = budget - totalExpenses;

  // Format remainingBudget with 2 decimal places
  const formattedRemainingBudget = remainingBudget.toFixed(2);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: </span>
      <span>
        {currency} {/* Display the selected currency symbol */}
        {formattedRemainingBudget}
      </span>
    </div>
  );
};

export default Remaining;

