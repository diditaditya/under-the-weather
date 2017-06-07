import { FETCH_CURRENT_WEATHER_SUCCESS } from '../constants';

const initialState = {
  currentWeather: '',
  dailyForecast: '',
  hourlyForecast: ''
}

const OpenWeatherReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeather: action.payload
      }
    case 'FETCH_DAILY_FORECAST_SUCCESS':
      return {
        ...state,
        dailyForecast: action.payload
      }
    case 'FETCH_HOURLY_FORECAST_SUCCESS':
      return {
        ...state,
        hourlyForecast: action.payload
      }
    default:
      return state
  }
}

export default OpenWeatherReducer;
