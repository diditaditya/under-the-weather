import React from 'react';
import renderer from 'react-test-renderer';

import { Weather } from '../components/Weather';

import { locationData } from '../mocks/locationData';
import { OWCurrentWeather } from '../mocks/currentWeather';
import { dailyForecast } from '../mocks/dailyForecast';
import { weather } from '../mocks/weather';

const getCurrentLocation = () => {}
const fetchOWCurrentWeather = () => {}

describe('Weather', () => {

  it('should render loading one day of forecast', () => {
    const WeatherComponent = renderer.create(<Weather weather={weather} />);
      expect(WeatherComponent).toMatchSnapshot();
  });

});
