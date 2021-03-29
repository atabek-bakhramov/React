import React, { useState, useEffect } from "react";
import CityWeatherCard from "./CityWeatherCard";
import Search from "./Search";
import "./city-weather.css";

const App = () => {
  const [cityWeather, setCityWeather] = useState(null);
  const [cityNameOnButton, setCityNameOnButton] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (cityNameOnButton) {
          setLoading(true);
          setError("");
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityNameOnButton}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
          );
          const data = await response.json();
          console.log(data);
          if (!response.ok) {
            throw new Error(data.message);
          }
          setCityWeather(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [cityNameOnButton]);

  return (
    <div className="container">
      <h1>Weather</h1>
      <Search setCityNameOnButton={setCityNameOnButton} />
      {error ? (
        <p className="error-message">{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        cityWeather && <CityWeatherCard data={cityWeather} />
      )}
    </div>
  );
};

export default App;
