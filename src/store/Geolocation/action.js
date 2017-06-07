import Axios from 'axios';

import { GET_CURRENT_POSITION_SUCCESS, GET_CURRENT_POSITION_FAILED } from '../constants';

export const selectWallpaper = () => {
  let time = new Date();
  if(time.getHours() > 5) {
    return {
      type: 'SELECT_WALLPAPER',
      payload: 'day'
    }
  } else if (time.getHours() > 18) {
    return {
      type: 'SELECT_WALLPAPER',
      payload: 'night'
    }
  }
}


export const getCurrentPositionSuccess = (data) => {
  return {
    type: GET_CURRENT_POSITION_SUCCESS,
    payload: data
  }
}

export const getCurrentPositionFailed = (data) => {
  return {
    type: GET_CURRENT_POSITION_FAILED,
    payload: data
  }
}

export const getCurrentPosition = (data) => {
  console.log("getting location data from google's geocode")
  let latlng = `${data.coords.latitude},${data.coords.longitude}`;
  let url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}`;
  return dispatch => {
    return Axios.get(url)
      .then((response) => {
        if(response.status === 200) {
          console.log(response.data);
          dispatch(getCurrentPositionSuccess(response.data));
        } else {
          console.log('error fetching reverse-geocode data');
          dispatch(getCurrentPositionFailed());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const getCurrentCoordinate = () => {
  return dispatch => {
    return navigator.geolocation.getCurrentPosition(data => {
        console.log(data);
        dispatch(getCurrentPosition(data));
      }, err => {
        console.log(err);
        if(err.code === 3) {
          console.log('Timed Out!')
        }
        let data = {
          coords: {
            latitude: -6.17511,
            longitude: 106.8650395
          }
        };
        console.log('using default location');
        dispatch(getCurrentPosition(data));
      }, {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      });

  }

}
