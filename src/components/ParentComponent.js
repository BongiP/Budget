import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import AllocationForm from './AllocationForm';
import Budget from './Budget';

const ParentComponent = () => {
  const [currency, setCurrency] = useState('£');

  const handleCurrencyChange = (event) => {
    console.log(event.target.value);
    setCurrency(event.target.value);
  };

  return (
    <div>
      <CurrencySelector currency={currency} onCurrencyChange={handleCurrencyChange} />
      <AllocationForm currency={currency} />
    </div>
  );
};

export default ParentComponent;