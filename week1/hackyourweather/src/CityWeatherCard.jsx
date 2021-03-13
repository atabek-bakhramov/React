/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import style from './CityWeatherCard.module.css';

const convertKelvin = (number) => (number - 273.15).toFixed(1);

const CityWeatherCard = ({ data }) => {
  const { name } = data;
  const { main } = data.weather[0];
  const { description } = data.weather[0];
  const minTemp = convertKelvin(data.main.temp_min);
  const maxTemp = convertKelvin(data.main.temp_max);
  const { lon } = data.coord;
  const { lat } = data.coord;
  return (
    <div className={style.cardHolder}>
      <h2>{name}</h2>
      <h3>{main}</h3>
      <h4><strong>{description}</strong></h4>
      <p>
        Min Temp: {minTemp}
      </p>
      <p>
        Max Temp: {maxTemp}
      </p>
      <p>
        Location: {lon}, {lat}
      </p>
    </div>
  );
};

export default CityWeatherCard;
