import React from 'react';
import { useHistory } from 'react-router-dom';
import './CityWeather.css';

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="container">
      <h2>Not Found</h2>
      <button type="button" onClick={() => history.goBack()}>Go back</button>
    </div>
  );
};

export default NotFound;
