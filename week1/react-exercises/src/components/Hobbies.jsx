import React from 'react';
import '../styles/hobbies.css';

const Hobbies = (props) => {
  const hobby = props.hobby;
  return (
    <li className="hobby-list-item">{hobby}</li>
  )
};

export default Hobbies;