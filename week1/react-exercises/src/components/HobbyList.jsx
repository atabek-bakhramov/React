import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Hobbies from './Hobbies';
import '../styles/hobbies.css';

export const HobbyList = () => {
  const [ hobbies ] = useState(['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing']);
  return (
    <>
      <h1 className="header">Exercise One</h1>
      <ul className="hobbies-list">
        {hobbies.map(item => {
          return <Hobbies key={uuid()} hobby={item}></Hobbies>
        })}
      </ul>
    </>
  )
};

export default HobbyList;