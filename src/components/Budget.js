import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, totalExpenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    if (event.target.value > 20000) {
      alert('The value cannot exceed the limit of £20,000');
      return;
    }
    if (event.target.value < totalExpenses) {
      alert('You can not reduce the budget value lower than the spending');
      return;
    }
    setNewBudget(event.target.value);
  };
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      className="alert alert-secondary"
    >
      <div>Budget:</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input required="required" type="number" value={newBudget} step="10" onChange={handleBudgetChange}></input>
      </div>
    </div>
  );
};
export default Budget;
