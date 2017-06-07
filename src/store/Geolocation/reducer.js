import { GET_CURRENT_POSITION_SUCCESS, GET_CURRENT_POSITION_FAILED } from '../constants';

const initialState = {
  locationData: '',
  message: '',
  wallpapers: {
    day: require('../../images/beautiful_light_blue_sky-wallpaper-480x800.jpg'),
    night: require('../../images/005e3efe1a23e55f2327eedd932c7742.jpg')
  },
  selectedWallpaper: ''
};

const GeolocationReducer = (state = initialState, action) => {
  if (action.type === GET_CURRENT_POSITION_SUCCESS) {
    return {
      ...state,
      message: '',
      locationData: action.payload
    }
  } else if (action.type === GET_CURRENT_POSITION_FAILED) {
    return {
      ...state,
      message: 'Unable to get current position, default location is used'
    }
  } else if (action.type === 'SELECT_WALLPAPER'){
    return {
      ...state,
      selectedWallpaper: state.wallpapers[action.payload]
    }
  } else {
    return state
  }
}

export default GeolocationReducer;
