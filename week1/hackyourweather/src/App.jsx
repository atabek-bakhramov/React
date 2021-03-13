import { useState } from 'react';
import jsonWeather from './city-weather.json';
import CityWeatherCard from './CityWeatherCard';

const App = () => {
  const [cityWeather] = useState(jsonWeather);
  return (
    <>
      {cityWeather.map((city) => (
        <CityWeatherCard weather={city} />
      ))}
    </>
  );
};

export default App;
