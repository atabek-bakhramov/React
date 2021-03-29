import React from "react";
import "./city-weather.css";

const CityWeatherCard = ({ data }) => {
  console.log(data);
  const { name } = data.data;
  const { country } = data.data.sys;
  const { main, description } = data.data.weather[0];
  const minTemp = data.data.main.temp_min;
  const maxTemp = data.data.main.temp_max;
  const { lon, lat } = data.data.coord;
  return (
    <div className="card-holder">
      <h2>
        {name}, {country}
      </h2>
      <h3>{main}</h3>
      <h4>
        <strong>{description}</strong>
      </h4>
      <p>Min Temp: {minTemp}</p>
      <p>Max Temp: {maxTemp}</p>
      <p>
        Location: {lon}, {lat}
      </p>
    </div>
  );
};

export default CityWeatherCard;
