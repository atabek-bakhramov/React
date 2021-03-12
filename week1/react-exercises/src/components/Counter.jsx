import React, { useState } from 'react'
import Count from './Count';
import Button from './Button';

const Counter = () => {
  const [ count, setCount ] = useState(0);
  const clickHandler = () => {
    setCount(value => value + 1);
  };
  return (
    <div>
      <Button onButtonClick={clickHandler}/>
      <Count number={count}/>
    </div>
  )
};

export default Counter;
