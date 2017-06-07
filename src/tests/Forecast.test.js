import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../store/configureStore';

import { Forecast } from '../components/Forecast';

import { locationData } from '../mocks/locationData';
import { OWCurrentWeather } from '../mocks/currentWeather';
import { dailyForecast } from '../mocks/dailyForecast';
import { weather } from '../mocks/weather';

const wallpaper = require('../../images/005e3efe1a23e55f2327eedd932c7742.jpg');

const getCurrentLocation = () => {}
const fetchOWCurrentWeather = () => {}

describe('Forecast', () => {

  it('should render header with location data and current weather', () => {
    const ForecastScreen = renderer.create(
      <Provider store={store}>
        <Forecast locationData={locationData} OWCurrentWeather={OWCurrentWeather} dailyForecast={''}/>
      </Provider>
    );
      expect(ForecastScreen).toMatchSnapshot();
  });

  it('should render body but loading data because of empty forecast data', () => {
    const ForecastScreen = renderer.create(
      <Provider store={store}>
        <Forecast locationData={locationData} OWCurrentWeather={OWCurrentWeather} dailyForecast={''}/>
      </Provider>
    );
      expect(ForecastScreen).toMatchSnapshot();
  });

  it('should render header and body correctly', () => {
    const ForecastScreen = renderer.create(
      <Provider store={store}>
        <Forecast locationData={locationData} OWCurrentWeather={OWCurrentWeather} dailyForecast={weather}/>
      </Provider>
    );
    expect(ForecastScreen).toMatchSnapshot();
  });

});
