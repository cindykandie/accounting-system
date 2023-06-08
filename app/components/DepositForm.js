// DepositForm.js
import { useState } from 'react';

function DepositForm() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation on the amount
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid deposit amount.');
      return;
    }

    // Perform the deposit logic and update user balance in the database
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Deposit Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
