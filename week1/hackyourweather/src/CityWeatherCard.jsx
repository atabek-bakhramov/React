import React from 'react';

const CityWeatherCard = ({
  cityName, weather, weatherDescription, minTemp, maxTemp, lon, lat,
}) => (
  <div>
    <h2>{cityName}</h2>
    <p>{weather}</p>
    <p>{weatherDescription}</p>
    <p>{minTemp}</p>
    <p>{maxTemp}</p>
    <p>{lon}</p>
    <p>{lat}</p>
  </div>
);

export default CityWeatherCard;
