import React, { useState } from 'react';

const Transaction2 = () => {
  const [result, setResult] = useState(null);

  const handleTransaction2 = async () => {
    try {
      const response = await fetch('/api/transaction2', { method: 'POST' });
      const data2 = await response.json();
      setResult(data2.message);
    } catch (error) {
      console.error(error);
      setResult('ok 2');
    }
  };

  return (
    <div>
      <button disabled={result !== null} onClick={handleTransaction2}>
        Eliminar
      </button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Transaction2;
