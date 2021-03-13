import React from 'react';

const Button = (props) => {
  const onButtonClick = props.onButtonClick;
  return (
    <button style={{"padding": "0.05rem 0.5rem"}} onClick={onButtonClick}>Add 1</button>
  )
}

export default Button;
