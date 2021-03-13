import { useState } from 'react';
import jsonWeather from './city-weather.json';
import CityWeatherCard from './CityWeatherCard';

const App = () => {
  const [cityWeather] = useState(jsonWeather);
  return (
    <>
      {cityWeather.map((city) => (
        <CityWeatherCard
          key={city.id}
          cityName={city.name}
          weather={city.weather[0].main}
          weatherDescription={city.weather[0].description}
          minTemp={city.main.temp_min}
          maxTemp={city.main.temp_max}
          lon={city.coord.lon}
          lat={city.coord.lat}
        />
      ))}
    </>
  );
};

export default App;
