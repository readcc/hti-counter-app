import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, multiplyCounter, subtractCounter, divideCounter } from "../actions/counterActions";
import styles from "./CounterApp.module.css";

const CounterApp = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [inputAmount, setInputAmount] = useState('2')

  const inputValue = Number(inputAmount) || 0

  return (
    <div className={styles.column}>
      <h1>Counter</h1>
      <p>Current count: {state.counter}</p>
      <p className={styles.status}>Status: {state.status}</p>
      <p>Click the buttons below to increment or decrement the count</p>
      
      <div className={styles.row}>
      <button className={styles.button} onClick={() => dispatch(addCounter(1))}>Add 1</button>
      <button className={styles.button} onClick={() => dispatch(subtractCounter(1))}>Subtract 1</button>
      </div>
      <div className={styles.row}>
        <input type="text" placeholder="Enter a number"  value={inputValue} onChange={e => setInputAmount(e.target.value)}  />
      </div>
      <div className={styles.row}>
      <button className={styles.button} onClick={() => dispatch(addCounter(inputValue))}>Add {inputValue}</button>
      <button className={styles.button} onClick={() => dispatch(subtractCounter(inputValue))}>Subtract {inputValue}</button>
      <button className={styles.button} onClick={() => dispatch(multiplyCounter(inputValue))}>Multiply by {inputValue}</button>
      <button className={styles.button} onClick={() => dispatch(divideCounter(inputValue))}>Divide by {inputValue}</button>
      </div>
    </div>
  );
}

export default CounterApp;