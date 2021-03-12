import React from 'react';
import '../styles/hobbies.css';

const Hobbies = (props) => {
  const hobby = props.hobby;
  return (
    <li>{hobby}</li>
  )
};

export default Hobbies;