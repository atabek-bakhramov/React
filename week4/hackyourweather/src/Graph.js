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
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
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
  }, []);

  return (
    <div>
      <h2>{cityName}</h2>
      <button type="button" onClick={() => history.goBack()}>Go back </button>

      <AreaChart
        width={800}
        height={400}
        data={cityForecast?.map((item) => ({
          dateTimeText: item.dt_txt,
          dateTime: item.dt,
          temperature: item.main.temp,
        }))}
        margin={{
          top: 5, right: 20, left: 10, bottom: 5,
        }}
      >

        <XAxis dataKey="dateTimeText" />
        <YAxis />
        <Tooltip labelStyle={{ color: 'black' }} />
        <Area type="monotone" dataKey="temperature" />
      </AreaChart>
    </div>
  );
};

export default Graph;
