import React from 'react';

const CityWeatherCard = ({ weather }) => {
  const { name } = weather;
  const { main } = weather.weather[0];
  const { description } = weather.weather[0];
  const minTemp = weather.main.temp_min;
  const maxTemp = weather.main.temp_max;
  const { lon } = weather.coord;
  const { lat } = weather.coord;
  return (
    <div>
      <h2>{name}</h2>
      <p>{main}</p>
      <p>{description}</p>
      <p>{minTemp}</p>
      <p>{maxTemp}</p>
      <p>{lon}</p>
      <p>{lat}</p>
    </div>
  );
};

export default CityWeatherCard;
