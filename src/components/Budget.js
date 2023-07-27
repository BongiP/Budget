// Budget.js
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, currency } = useContext(AppContext);
  const [editableBudget, setEditableBudget] = useState(budget);

  useEffect(() => {
    console.log('Budget re-rendered');
  }, [currency]);

  const handleBudgetChange = (event) => {
    setEditableBudget(event.target.value);
  };

  const handleBudgetSave = () => {
    dispatch({
      type: 'SET_BUDGET',
      payload: parseInt(editableBudget),
    });
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: </span>
      <span>
        {currency} {/* Display the selected currency symbol */}
        <input
          type='number'
          value={editableBudget}
          onChange={handleBudgetChange}
          onBlur={handleBudgetSave}
          style={{ width: '6em', margin: '0 0.5em' }}
        />
      </span>
    </div>
  );
};

export default Budget;

