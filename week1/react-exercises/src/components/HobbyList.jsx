import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Hobbies from './Hobbies';
import style from '../styles/Hobbies.module.css';

export const HobbyList = () => {
  const [ hobbies ] = useState(['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing']);
  return (
    <>
      <h1 className="header">Exercise One</h1>
      <ul className={style.hobbiesList}>
        {hobbies.map(item => {
          return <Hobbies key={uuid()} hobby={item}></Hobbies>
        })}
      </ul>
    </>
  )
};

export default HobbyList;