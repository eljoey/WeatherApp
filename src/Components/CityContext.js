import React, { useState, createContext, useEffect } from 'react';

const initialState = {
  city: 'BOSTON',
  tempLabel: 'imperial',
  prevCities: ['SAN FRANCISCO']
};

const localState = JSON.parse(localStorage.getItem('cityInfo'));

export const CityContext = createContext();

export const CityProvider = props => {
  const [cityInfo, setCityInfo] = useState(localState || initialState);

  useEffect(() => {
    localStorage.setItem('cityInfo', JSON.stringify(cityInfo));
  }, [cityInfo]);

  return (
    <CityContext.Provider value={[cityInfo, setCityInfo]}>
      {props.children}
    </CityContext.Provider>
  );
};
