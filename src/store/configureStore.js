import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers for OpenWeather, DarkSky, and YahooWeather
import OpenWeather from './OpenWeather/reducer';
// import DarkSky from './DarkSky/reducer';
// import YahooWeather from './YahooWeather/reducer';
import Geolocation from './Geolocation/reducer'

const rootReducers = combineReducers({
  OpenWeather,
  // DarkSky,
  // YahooWeather,
  Geolocation
});

const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducers, middlewares);

export default store;
