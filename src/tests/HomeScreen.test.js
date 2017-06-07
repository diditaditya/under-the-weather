import React from 'react';
import renderer from 'react-test-renderer';

import {HomeScreen} from '../components/HomeScreen';

import { locationData } from '../mocks/locationData';
import { OWCurrentWeather } from '../mocks/currentWeather';

const getCurrentLocation = () => {}
const fetchOWCurrentWeather = () => {}

describe('HomeScreen', () => {

  it('should render loading location data because of empty location data', () => {
    const Home = renderer.create(<HomeScreen locationData={''} OWCurrentWeather={''} getCurrentLocation={getCurrentLocation}/>);
      expect(Home).toMatchSnapshot();
  });

  it('should render loading current weather data because of empty weather data', () => {
    const Home = renderer.create(<HomeScreen locationData={locationData} OWCurrentWeather={''} getCurrentLocation={getCurrentLocation} fetchOWCurrentWeather={fetchOWCurrentWeather}/>);
      expect(Home).toMatchSnapshot();
  });

  it('should render with current weather and location data', () => {
    const Home = renderer.create(<HomeScreen locationData={locationData} OWCurrentWeather={OWCurrentWeather} getCurrentLocation={getCurrentLocation}/>);
    expect(Home).toMatchSnapshot();
  });

});
