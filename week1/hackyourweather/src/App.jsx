import { useState } from 'react';
import jsonWeather from './city-weather.json';
import CityWeatherCard from './CityWeatherCard';
import style from './CityWeatherCard.module.css';

const App = () => {
  const [cityWeather] = useState(jsonWeather);
  return (
    <>
      <h1 className={style.header}>Weather</h1>
      {cityWeather.map((city) => (
        <CityWeatherCard data={city} key={city.id} />
      ))}
    </>
  );
};

export default App;
