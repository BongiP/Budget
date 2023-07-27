// components/ParentComponent.js
import React, { useContext, useState } from 'react';
import CurrencySelector from './CurrencySelector';
import AllocationForm from './AllocationForm';
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseTotal from './';
import ExpenseList from './ExpenseList';
import ExpenseItem from './ExpenseItem';
import { AppProvider, AppContext } from '../context/AppContext';

const ParentComponent = () => {
  // Get the currency from the context
  const { currency, handleCurrencyChange } = useContext(AppContext);

  // Local state for the selected currency
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  // Handler for changing the currency in the context
  const handleChangeCurrency = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    handleCurrencyChange(newCurrency);
  };

  return (
    <AppProvider>
      <div>
        <CurrencySelector currency={selectedCurrency} onCurrencyChange={handleChangeCurrency} />
        <Budget />
        <AllocationForm />
        <Remaining />
        <ExpenseTotal/>
        <ExpenseList/>
        <ExpenseItem/>
      </div>
    </AppProvider>
  );
};

export default ParentComponent;

