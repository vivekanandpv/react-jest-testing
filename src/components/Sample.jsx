import React, { useState } from 'react';

const Sample = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((v) => v + 1);
  };

  const decrement = () => {
    setCounter((v) => v - 1);
  };
  return (
    <>
      <h3>
        Counter: <span data-testid='counter-span'>{counter}</span>
      </h3>

      <button data-testid='btn-inc' onClick={increment}>
        Increment
      </button>
      <button data-testid='btn-dec' onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default Sample;
