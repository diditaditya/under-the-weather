import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const showMoreIcon = require('../images/684796_arrows_512x512.png');

const styles = {
  mainContainer: {
    flexDirection: 'row',
  },
  weatherInfoContainer: {
    flexDirection: 'column',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainTempContainer: {
    flexDirection: 'row',
  },
  infoTempContainer: {
    flexDirection: 'row',
  },
  showMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    flex: 1,
  },
  mainTemp: {
    fontSize: 150,
    opacity: 2,
  },
  infoTemp: {
    fontSize: 25,
    marginRight: 10,
  },
  degree: {
    marginTop: 25,
    fontSize: 50,
  },
  showMore: {
    margin: 10,
    width: 50,
    height: 50,
    opacity: 0.6,
  },
};


export class CurrentWeatherThumbnail extends React.Component {

  constructor(props) {
    super(props);
    this.arrowImage = showMoreIcon;
  }

  render() {
    const icon = `http://openweathermap.org/img/w/${this.props.currentWeather.weather.icon}.png`;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.weatherInfoContainer}>
          <View style={styles.descriptionContainer}>
            <Image source={{ uri: icon }} style={styles.icon} />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Forecast')} >
              <Image source={this.arrowImage} style={styles.showMore} />
            </TouchableOpacity>
          </View>
          <View style={styles.mainTempContainer}>
            <Text style={styles.mainTemp}>{parseInt(this.props.currentWeather.main.temp, 10)}</Text>
            <Text style={styles.degree}>o</Text>
          </View>
          <View style={styles.infoTempContainer}>
            <Text style={styles.infoTemp}>min: {this.props.currentWeather.main.temp_min}</Text>
            <Text style={styles.infoTemp}>max: {this.props.currentWeather.main.temp_max}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CurrentWeatherThumbnail;
