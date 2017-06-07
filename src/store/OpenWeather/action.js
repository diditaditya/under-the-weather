import Axios from 'axios';

import { FETCH_CURRENT_WEATHER_SUCCESS } from '../constants';

const setCurrentWeather = (data) => {
  return {
    type: FETCH_CURRENT_WEATHER_SUCCESS,
    payload: data
  }
}

const setDailyForecast = (data) => {
  return {
    type: 'FETCH_DAILY_FORECAST_SUCCESS',
    payload: data
  }
}

const setHourlyForecast = (data) => {
  return {
    type: 'FETCH_HOURLY_FORECAST_SUCCESS',
    payload: data
  }
}

export const fetchCurrentWeather = (coord) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lng}&mode=json&units=metric&APPID=8b8926b398fdba5ce76701d649c783f8`;
  return dispatch => {
    return Axios.get(url)
      .then((response) => {
        // console.log(response);
        if(response.status === 200) {
          let data = {
            weather: response.data.weather[0],
            wind: response.data.wind,
            main: response.data.main
          }
          // console.log(data);
          dispatch(setCurrentWeather(data));
        } else {
          console.log('Failed fetching data from Open Weather');
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


const convertDate = (oriDate) => {
    let fullDate = new Date(oriDate);
    let year = fullDate.getFullYear();
    let month = String(fullDate.getMonth() + 1);
    if(month.length === 1) {
        month = '0' + month;
    }
    let date = String(fullDate.getDate());
    if(date.length === 1) {
        date = '0' + date;
    }
    return `${year}-${month}-${date}`;
}

export const fetchDailyForecast = (coord) => {
  console.log('in action fetchDailyForecast');
  let count = 10;
  let url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${coord.lat}&lon=${coord.lng}&mode=json&units=metric&cnt=${count}&APPID=8b8926b398fdba5ce76701d649c783f8`;
  return dispatch => {
    return Axios.get(url)
        .then((response) => {
          if(response.status = 200) {
            // console.log(response.data);
            let today = new Date();
            console.log(today);
            let data = response.data.list.map((item, index) => {
              let date = new Date(today);
              date.setDate(today.getDate() + index);
              return {
                id: index,
                date: convertDate(date),
                temp: item.temp,
                humidity: item.humidity,
                windSpeed: item.speed,
                windDir: item.deg,
                clouds: item.clouds,
                weather: item.weather[0],
                icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`
              }
            });
            dispatch(setDailyForecast(data))
          } else {
            console.log('Failed fetching data from Open Weather');
            console.log(response);
          }
        })
        .catch((err) => {
            console.log(err);
        });
  }

}

export const fetchHourlyForecast = (coord) => {
  // console.log('in action fetchHourlyForecast');
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lng}&mode=json&units=metric&APPID=8b8926b398fdba5ce76701d649c783f8`;
  return (dispatch) => {
    return Axios.get(url)
        .then((response) => {
          if (response.status === 200) {
            // console.log(response.data);
            const data = response.data.list.map((item, index) => {
              return {
                id: index,
                date: item.dt_txt,
                main: item.main,
                wind: item.wind,
                clouds: item.clouds,
                weather: item.weather[0],
                icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`
              }
            });
            dispatch(setHourlyForecast(data))
          } else {
            console.log('Failed fetching hourly data from Open Weather');
            console.log(response);
          }
        })
        .catch((err) => {
            console.log(err);
        });
  }
}
