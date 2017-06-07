import React from 'react';
import renderer from 'react-test-renderer';

import { Body } from '../components/Body';

import { locationData } from '../mocks/locationData';
import { OWCurrentWeather } from '../mocks/currentWeather';
import { dailyForecast } from '../mocks/dailyForecast';
import { weather } from '../mocks/weather';

const getCurrentLocation = () => {}
const fetchOWCurrentWeather = () => {}

describe('Body', () => {

  it('should render daily forecast', () => {
    const BodyComponent = renderer.create(<Body dailyForecast={weather} />);
      expect(BodyComponent).toMatchSnapshot();
  });

});
