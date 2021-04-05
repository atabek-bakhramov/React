import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import CityWeatherCard from './CityWeatherCard';
import Search from './Search';
import './CityWeather.css';
import Graph from './Graph';

const App = () => {
  const [cityWeather, setCityWeather] = useState([]);
  const [cityNameOnButton, setCityNameOnButton] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const deleteCard = (id) => {
    setCityWeather((current) => current.filter((element) => element.id !== id));
  };

  useEffect(() => {
    (async () => {
      try {
        if (cityNameOnButton) {
          setLoading(true);
          setError('');
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityNameOnButton}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
          );
          const data = await response.json();
          if (!response.ok) throw new Error(data.message);
          if (!cityWeather.some((city) => city.name === data.name)) {
            setCityWeather([data, ...cityWeather]);
          }
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityNameOnButton]);

  return (
    <>
      <h1>Weather</h1>
      <Router>
        <Route path="/" exact>
          <div className="container">
            <Search setCityNameOnButton={setCityNameOnButton} />
            {error && <p className="error-message">{error}</p>}
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              cityWeather
              && cityWeather.map((city) => (
                <CityWeatherCard
                  data={city}
                  key={city.id}
                  cityKey={city.id}
                  deleteCard={deleteCard}
                />
              ))
            )}
          </div>
        </Route>
        <Route path="/:cityId">
          <Graph />
        </Route>
      </Router>

    </>
  );
};

export default App;
