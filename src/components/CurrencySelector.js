import React, {useState} from 'react';

const CurrencySelector = (props) => {
  const [currency, setCurrency] = useState('£');
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className='container'>
      <label htmlFor="currency" style={{ color: 'green' }}>Select currency:</label>
      <select id="currency" value={currency} onChange={handleCurrencyChange} style={{ backgroundColor: 'lightgreen' }}>
        <option value="£">£ Pounds</option>
        <option value="$">$ Dollars</option>
        <option value="€">€ Euros</option>
        <option value="₹">₹ Rupees</option>
      </select>
    </div>
  );
};

export default CurrencySelector;