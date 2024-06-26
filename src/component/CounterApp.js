import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCounter,
  multiplyCounter,
  subtractCounter,
  divideCounter,
  sqrtCounter,
  powCounter,
} from "../actions/counterActions";
import styles from "./CounterApp.module.css";

const CounterApp = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [inputAmount, setInputAmount] = useState("2");

  const inputValue = Number(inputAmount) || 0;

  return (
    <div className={styles.column}>
      <h1>Counter</h1>
      <div className={styles.row}>
        <h1>{state.counter}</h1>
      </div>
      <p className={styles.status}>Status: {state.status}</p>
      <p>Click the buttons below to change the count</p>

      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(addCounter(1))}
        >
          Add 1
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(subtractCounter(1))}
        >
          Subtract 1
        </button>
      </div>
      <div className={styles.row}>
        <input
          type="text"
          placeholder="Enter a number"
          value={inputValue}
          onChange={(e) => setInputAmount(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(addCounter(inputValue))}
        >
          Add {inputValue}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(subtractCounter(inputValue))}
        >
          Subtract {inputValue}
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(multiplyCounter(inputValue))}
        >
          Multiply by {inputValue}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(divideCounter(inputValue))}
        >
          Divide by {inputValue}
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(sqrtCounter(inputValue))}
        >
          Square Root
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(powCounter(inputValue))}
        >
          Raise to the Power of {inputValue}
        </button>
      </div>
    
    </div>
  );
};

export default CounterApp;
