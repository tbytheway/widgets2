import React, { useState } from 'react';

export default function Add() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(number1 + number2);

  function calculateTotal() {
    setTotal(number1 + number2);
  }

  return (
    <div>
      <h1>Add Two Numbers</h1>

      <div>
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder=""
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder=""
        />
      </div>

      <button onClick={calculateTotal}>Add</button>

      <h2>{total}</h2>

      
    </div>
  );
}