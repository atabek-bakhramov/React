import React from 'react';

const Button = (props) => {
  const onButtonClick = props.onButtonClick;
  return (
    <button className="button-add" onClick={onButtonClick}>Add 1!</button>
  )
}

export default Button;
