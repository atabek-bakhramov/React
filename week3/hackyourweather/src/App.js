import React, { useState, useEffect } from "react";
import CityWeatherCard from "./CityWeatherCard";
import Search from "./Search";
import "./city-weather.css";

const App = () => {
  const [cityWeather, setCityWeather] = useState([]);
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
          if (!response.ok) {
            throw new Error(data.message);
          }
          setCityWeather([...cityWeather, { data }]);
        } else {
          throw new Error("Enter City Name");
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
    <div className="container">
      <h1>Weather</h1>
      <Search setCityNameOnButton={setCityNameOnButton} />
      {error ? (
        <p className="error-message">{error}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        cityWeather &&
        cityWeather.map((city) => <CityWeatherCard data={city} key={city.id} />)
      )}
    </div>
  );
};

export default App;
