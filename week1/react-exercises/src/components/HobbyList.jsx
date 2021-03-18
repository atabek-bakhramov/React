import React, { useState } from 'react';
import Hobbies from './Hobbies';
import style from '../styles/Hobbies.module.css';

export const HobbyList = () => {
  const [ hobbies ] = useState(['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing']);
  return (
    <>
      <h1 className="header">Exercise One</h1>
      <ul className={style.hobbiesList}>
        {hobbies.map((item, index) => {
          return <Hobbies key={index} hobby={item}></Hobbies>
        })}
      </ul>
    </>
  )
};

export default HobbyList;