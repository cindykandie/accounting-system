// WithdrawalForm.js
import { useState } from 'react';

function WithdrawalForm() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation on the amount
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid withdrawal amount.');
      return;
    }

    // Perform the withdrawal logic and update user balance in the database
    // Simulating an API call with a timeout
    setTimeout(() => {
      console.log(`Withdrawal of $${amount} processed successfully.`);
      // Reset the form after successful withdrawal
      setAmount('');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Withdrawal Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Withdraw</button>
    </form>
  );
}

export default WithdrawalForm;
