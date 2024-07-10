# ritik-counter

A simple and lightweight React hook for managing a counter state.

## Installation

```bash
npm install ritik-counter

yarn add ritik-counter


const { count, increment, decrement } = useCounter(initialValue);

import React from 'react';
import { useCounter } from 'ritik-counter';

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}


