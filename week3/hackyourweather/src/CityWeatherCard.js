import React from 'react';
import './CityWeather.css';

const CityWeatherCard = ({ data, deleteCard, cityKey }) => {
  const { name } = data;
  const { country } = data.sys;
  const { main, description } = data.weather[0];
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  const { lon, lat } = data.coord;
  return (
    <div className="card-holder">
      <span
        // in order to turn span into a button
        role="button"
        tabIndex={-1}
        onClick={() => deleteCard(cityKey)}
        onKeyDown={() => {}}
        className="close-button"
      >
        X
      </span>
      <h2>
        {name}
        ,
        {' '}
        {country}
      </h2>
      <h3>{main}</h3>
      <h4>
        <strong>{description}</strong>
      </h4>
      <p>
        Min Temp:
        {' '}
        {minTemp}
      </p>
      <p>
        Max Temp:
        {' '}
        {maxTemp}
      </p>
      <p>
        Location:
        {' '}
        {lon}
        ,
        {' '}
        {lat}
      </p>
    </div>
  );
};

export default CityWeatherCard;
