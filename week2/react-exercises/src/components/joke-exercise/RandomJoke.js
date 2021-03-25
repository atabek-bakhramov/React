import React, { useState, useEffect } from "react";
import Joke from "./Joke.js";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setJoke(data);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Joke setup={joke.setup} punchline={joke.punchline} />
    </div>
  );
};

export default RandomJoke;
