import React from 'react';
import style from '../styles/Counter.module.css';

const Button = (props) => {
  const onButtonClick = props.onButtonClick;
  return (
    <button className={style.buttonAdd} onClick={onButtonClick}>Add 1!</button>
  )
}

export default Button;
