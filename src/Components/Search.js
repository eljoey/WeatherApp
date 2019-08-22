import React, { useState, useContext } from 'react';
import { CityContext } from './CityContext';

const Search = () => {
  const [name, setName] = useState('');
  const [cityInfo, setCityInfo] = useContext(CityContext);

  const updateName = e => {
    setName(e.target.value.toUpperCase());
    console.log(name);
  };

  const searchCity = e => {
    e.preventDefault();
    if (name === '') return;

    // Will move current city to previous cities and filter previous cities to remove duplicate searches of same city
    const newPrevCities = [...cityInfo.prevCities, cityInfo.city];
    const filteredCities = newPrevCities.filter(
      (city, index) => newPrevCities.indexOf(city) === index
    );

    setCityInfo(prevCityInfo => ({
      city: name,
      tempLabel: prevCityInfo.tempLabel,
      prevCities: filteredCities
    }));

    setName('');
  };

  const setTempUnit = unit => {
    setCityInfo(prevCityInfo => ({
      city: prevCityInfo.city,
      tempLabel: unit,
      prevCities: [...prevCityInfo.prevCities]
    }));
  };

  return (
    <div className="searchbar">
      <form onSubmit={searchCity}>
        <input
          type="text"
          placeholder="Enter City or Place (eg. London or London, UK"
          value={name}
          onChange={updateName}
        />
      </form>
      <div
        className="imperial"
        onClick={() => {
          setTempUnit('imperial');
        }}
      >
        °F
      </div>
      <div
        className="metric"
        onClick={() => {
          setTempUnit('metric');
        }}
      >
        °C
      </div>
    </div>
  );
};

export default Search;
