import React from 'react';

export default function IncreaseDecreaseNumber({ value, onIncrease, onDecrease }) {
  return (
    <>
      <h2>{value}</h2>
      <button onClick={onIncrease}> + </button>&nbsp;&nbsp;
      <button onClick={onDecrease}> - </button>
    </>
  );
}