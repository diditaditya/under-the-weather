import React from 'react';
import renderer from 'react-test-renderer';

import {Header} from '../components/Header';

import { locationData } from '../mocks/locationData';
import { OWCurrentWeather } from '../mocks/currentWeather';
import { dailyForecast } from '../mocks/dailyForecast';

const wallpaper = require('./images/005e3efe1a23e55f2327eedd932c7742.jpg');

const getCurrentLocation = () => {}
const fetchOWCurrentWeather = () => {}

describe('Header', () => {

  it('should render with current weather and location data', () => {
    const HeaderComponent = renderer.create(<Header locationData={locationData} OWCurrentWeather={OWCurrentWeather}/>);
    expect(HeaderComponent).toMatchSnapshot();
  });

});
