# ritik-counter

A simple and lightweight React hook for managing a counter state.

## Installation

Using npm:
```bash
npm install ritik-counter
```
```bash
Using yarn:
yarn add ritik-counter
```


useCounter
```bash
const { count, increment, decrement } = useCounter(initialValue);
```
```bash
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

```
```bash
Parameters

initialValue (optional): The initial value for the counter. Defaults to 0.

Returns
An object with the following properties:

count: The current value of the counter.
increment: A function to increase the counter by 1.
decrement: A function to decrease the counter by 1.

Features

Easy-to-use React hook
Lightweight with no external dependencies
TypeScript support
```
```bash
Example
Here's a complete example of how to use the useCounter hook in a React component:

import React from 'react';
import { useCounter } from 'ritik-counter';

function CounterExample() {
  const { count, increment, decrement } = useCounter(5); // Starting from 5

  return (
    <div>
      <h1>Counter Example</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterExample;
```

Contributing
Contributions, issues, and feature requests are welcome! Feel free to check issues page.
License
This project is MIT licensed.
Support
If you found this project helpful, please consider giving it a ⭐️ on GitHub!
