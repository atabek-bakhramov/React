import React from 'react';

const Button = (props) => {
  const onButtonClick = props.onButtonClick;
  return (
    <button onClick={onButtonClick}>+</button>
  )
}

export default Button;
