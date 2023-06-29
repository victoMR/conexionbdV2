import React, { useState } from 'react';

const Transaction1 = () => {
  const [result, setResult] = useState(null);

  const handleTransaction1 = async () => {
    try {
      const response = await fetch('/api/transaction1', { method: 'POST' });
      const data = await response.json();
      setResult('Transacción exitosa.');
    } catch (error) {
      console.error(error);
      setResult('Transacción incorrecta.');
    }
  };

  return (
    <div>
      <button disabled={result !== null} onClick={handleTransaction1}>
        Transacción 1
      </button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Transaction1;

