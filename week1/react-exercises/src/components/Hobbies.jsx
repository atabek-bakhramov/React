import React from 'react';
import style from '../styles/Hobbies.module.css';

const Hobbies = (props) => {
  const hobby = props.hobby;
  return (
    <li className={style.hobbyListItem}>{hobby}</li>
  )
};

export default Hobbies;