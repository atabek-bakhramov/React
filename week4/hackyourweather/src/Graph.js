import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  AreaChart, XAxis, YAxis, Tooltip, Area,
} from 'recharts';

const Graph = () => {
  const history = useHistory();
  const { cityId } = useParams();
  const [cityForecast, setCityForecast] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setCityName(data.city.name);
        setCityForecast(data.list);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [cityId]);

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cityForecast && cityName && (
        <div className="graph-container">
          <h2>
            Forecast for 5 days
            {' '}
            {cityName}
          </h2>
          <AreaChart
            width={600}
            height={300}
            data={cityForecast?.map((item) => ({
              dateTimeText: item.dt_txt,
              temperature: item.main.temp,
            }))}
            margin={{
              top: 5, right: 20, left: 10, bottom: 5,
            }}
          >
            <XAxis dataKey="dateTimeText" />
            <YAxis />
            <Tooltip labelStyle={{ color: 'red' }} />
            <Area type="monotone" dataKey="temperature" />
          </AreaChart>
        </div>
      )}
      <button type="button" onClick={() => history.goBack()}>Go back</button>
    </div>
  );
};

export default Graph;
