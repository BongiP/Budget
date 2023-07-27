// ParentComponent.js
import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import AllocationForm from './AllocationForm';
import Budget from './Budget';
import { AppProvider } from '../context/AppContext';

const ParentComponent = () => {
  const [currency, setCurrency] = useState('£');

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    console.log(selectedCurrency);
    setCurrency(selectedCurrency);
    // Update the currency in the AppProvider using dispatch
    // Assuming you have a dispatch function from the AppProvider
    // dispatch({ type: 'SET_CURRENCY', payload: selectedCurrency });
  };

  return (
    <AppProvider>
      <div>
        <CurrencySelector currency={currency} onCurrencyChange={handleCurrencyChange} />
        <Budget />
        <AllocationForm currency={currency} />
      </div>
    </AppProvider>
  );
};

export default ParentComponent;
