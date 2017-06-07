import React from 'react';
import renderer from 'react-test-renderer';

import { MoreDetail } from '../components/WeatherMoreDetail';

import { locationData } from '../mocks/locationData';
import { OWCurrentWeather } from '../mocks/currentWeather';
import { dailyForecast } from '../mocks/dailyForecast';
import { weather } from '../mocks/weather';

const getCurrentLocation = () => {}
const fetchOWCurrentWeather = () => {}

describe('WeatherMoreDetail', () => {

  it('should render details of one day of forecast', () => {
    const WeatherMoreDetailComponent = renderer.create(<MoreDetail weather={weather} />);
      expect(WeatherMoreDetailComponent).toMatchSnapshot();
  });

});
