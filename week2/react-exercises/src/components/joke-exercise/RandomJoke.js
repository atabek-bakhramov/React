import React, { useState, useEffect } from 'react';
import Joke from './Joke.js';

const RandomJoke = () => {
  const [ joke, setJoke ] = useState({});
  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setJoke(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <Joke setup={joke.setup} punchline={joke.punchline}/>
    </div>
  )
};

export default RandomJoke
