import React from 'react';
import { View, Text,
  ActivityIndicator,
  Image } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import { getCurrentCoordinate } from '../store/Geolocation/action';
import { fetchCurrentWeather } from '../store/OpenWeather/action';

import WeatherForecast from './Forecast';
import StatusText from './HomeScreenStatusText';
import Location from './HomeScreenLocation';
import Thumbnail from './HomeScreenThumbnail';

const dayWallpaper = require('../images/beautiful_light_blue_sky-wallpaper-480x800.jpg');
const nightWallpaper = require('../images/005e3efe1a23e55f2327eedd932c7742.jpg');

const styles = {
  mainContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  locationContainer: {
    flex: 1,
    padding: 10,
  },
  statusContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
};

export class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wallpapers: {
        day: dayWallpaper,
        night: nightWallpaper,
      },
      selectedWallpaper: '',
    };
  }

  componentWillMount() {
    this.selectWallpaper();
  }

  componentDidMount() {
    this.props.getCurrentLocation();
  }

  fetchAllCurrentWeathers() {
    const coord = {
      lat: this.props.locationData.results[0].geometry.location.lat,
      lng: this.props.locationData.results[0].geometry.location.lng,
    };
    this.props.fetchOWCurrentWeather(coord);
  }

  selectWallpaper() {
    const time = new Date();
    if (time.getHours() > 5) {
      this.setState({
        selectedWallpaper: this.state.wallpapers.day,
      });
    } else if (time.getHours() >= 18 || time.getHours() >= 0) {
      this.setState({
        selectedWallpaper: this.state.wallpapers.night,
      });
    }
  }

  render() {
    if (this.props.locationData.results) {
      if (!this.props.OWCurrentWeather) {
        this.fetchAllCurrentWeathers();
        return (
          <Image source={this.state.selectedWallpaper} style={styles.mainContainer}>
            <View style={styles.locationContainer}>
              <Location locationData={this.props.locationData} />
            </View>
            <View style={styles.statusContainer}>
              <ActivityIndicator size="large" />
              <StatusText
                locationData={this.props.locationData}
                OWCurrentWeather={this.props.OWCurrentWeather}
              />
            </View>
          </Image>
        );
      }

      return (
        <Image source={this.state.selectedWallpaper} style={styles.mainContainer}>
          <View style={styles.locationContainer}>
            <Location locationData={this.props.locationData} />
          </View>
          <View style={styles.statusContainer}>
            <View style={styles.thumbnail}>
              <Thumbnail
                currentWeather={this.props.OWCurrentWeather}
                navigation={this.props.navigation}
              />
            </View>
          </View>
          <View style={{ alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 10 }}>
              Powered by <Text style={{ fontWeight: 'bold' }}>OpenWeatherMap.org</Text>
            </Text>
          </View>
        </Image>
      );
    }

    return (
      <Image source={this.state.selectedWallpaper} style={styles.mainContainer}>
        <View style={styles.statusContainer}>
          <ActivityIndicator size="large" />
          <StatusText
            locationData={this.props.locationData}
            OWCurrentWeather={this.props.OWCurrentWeather}
          />
        </View>
      </Image>
    );
  }
}

function mapStateToProps(state) {
  return {
    locationData: state.Geolocation.locationData,
    OWCurrentWeather: state.OpenWeather.currentWeather,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentLocation: () => dispatch(getCurrentCoordinate()),
    fetchOWCurrentWeather: coord => dispatch(fetchCurrentWeather(coord)),
  };
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

// export default test;

const HomeNav = StackNavigator({
  HomeScreen: {
    screen: Home,
  },
  Forecast: {
    screen: WeatherForecast,
  },
},
  {
    headerMode: 'none',
  });

export default HomeNav;
