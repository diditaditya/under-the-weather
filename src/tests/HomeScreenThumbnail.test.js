import React from 'react';
import renderer from 'react-test-renderer';

import { HomeScreenLocation } from '../components/HomeScreenLocation';

import { locationData } from '../mocks/locationData';
import { OWCurrentWeather } from '../mocks/currentWeather';
import { dailyForecast } from '../mocks/dailyForecast';
import { weather } from '../mocks/weather';

const getCurrentLocation = () => {}
const fetchOWCurrentWeather = () => {}

describe('HomeScreenLocation', () => {

  it('should render location info', () => {
    const Location = renderer.create(<HomeScreenLocation locationData={locationData} />);
      expect(Location).toMatchSnapshot();
  });

});
