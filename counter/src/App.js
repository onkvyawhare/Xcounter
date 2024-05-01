import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <div>Count: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterApp;