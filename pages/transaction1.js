import React, { useState, useEffect } from 'react';

const Transaction1 = () => {
  const [result, setResult] = useState(null);

  const handleTransaction1 = async () => {
    try {
      const response = await fetch('/api/transaction1', { method: 'POST' });
      const data = await response.json();
      setResult(data.message);
    } catch (error) {
      console.error(error);
      setResult('ok.');
    }
  };

  useEffect(() => {
    handleTransaction1();
  }, []);

  return (
    <div>
      <button disabled={result !== null} onClick={handleTransaction1} className="bg-dark text-light p-4 rounded-lg">
        Transacción 1
      </button>
      {result && <p>{result}</p>}
    </div>
    
  );
};

export default Transaction1;

