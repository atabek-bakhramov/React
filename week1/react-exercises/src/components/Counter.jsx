import React, { useState } from 'react'
import Count from './Count';
import Button from './Button';
import style from '../styles/Counter.module.css';

const Counter = () => {
  const [ count, setCount ] = useState(0);
  const clickHandler = () => {
    setCount(value => value + 1);
  };
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting :)";  
  return (
    <>
      <h1 className="header">Exercise Three</h1>
      <div className={style.counterContainer}>
        <Count number={count}/>
        <Button onButtonClick={clickHandler}/>
        <p>{feedback}</p>
      </div>
    </>
  )
};

export default Counter;
