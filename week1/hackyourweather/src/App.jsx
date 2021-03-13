import { useState } from 'react';
import jsonWeather from './city-weather.json';
import CityWeatherCard from './CityWeatherCard';

const App = () => {
  const [cityWeather] = useState(jsonWeather);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Weather</h1>
      {cityWeather.map((city) => (
        <CityWeatherCard data={city} />
      ))}
    </>
  );
};

export default App;
