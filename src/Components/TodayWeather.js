import React, { useContext, useState } from 'react';
import { CityContext } from './CityContext';

const weather = require('openweather-apis');

const TodayWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState('');
  const [cityInfo, setCityInfo] = useContext(CityContext);

  const apicall =
    'api.openweathermap.org/data/2.5/weather?q=' +
    cityInfo.city +
    '&units=' +
    cityInfo.tempLabel +
    '&APPID=e07d8ddac54eade82bcdb237b5cf6279';

  console.log(apicall);

  async function fetchWeather() {
    const response = await fetch(apicall);
    setWeatherInfo(weather);
    console.log(weather);
  }

  return (
    <div>
      <h1>{}</h1>
    </div>
  );
};

export default TodayWeather;
