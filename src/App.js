import React, { useContext, useState } from 'react';
import './App.css';
import { CityProvider } from './Components/CityContext';
import TodayWeather from './Components/TodayWeather';
import Search from './Components/Search';

const weather = require('openweather-apis');
weather.setLang('en');
weather.setAPPID('e07d8ddac54eade82bcdb237b5cf6279');
weather.setUnits('imperial');

function App() {
  // weather.setCity('san francisco');

  // weather.getTemperature((err, temp) => {
  //   console.log(temp);
  // });

  //   // weather.getDescription((err, desc) => {
  //   //   console.log(desc);
  //   // });

  //   // weather.getWeatherForecast((err, forecast) => {
  //   //   console.log(forecast);
  //   // });

  //   // weather.getAllWeather((err, obj) => {
  //   //   console.log(obj);
  //   // });

  return (
    <CityProvider>
      <div className="App">
        <Search />
        <TodayWeather />
      </div>
    </CityProvider>
  );
}

export default App;
