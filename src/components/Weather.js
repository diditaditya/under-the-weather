import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import WeatherMoreDetail from './WeatherMoreDetail';

const now = new Date();
let textColor = '';
let bgColor = '';
if (now.getHours > 5) {
  textColor = 'rgba(255,255,255,1)';
  bgColor = 'rgba(0,0,0,0.5)';
} else if (now.getHours > 18 || now.getHours() >= 0) {
  textColor = 'rgba(0,0,0,1)';
  bgColor = 'rgba(255,255,255,0.5)';
}

const styles = StyleSheet.create({
  weatherContainer: {
    backgroundColor: bgColor,
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
  },
  visible: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 200,
  },
  weatherText: {
    alignItems: 'center',
    fontSize: 14,
    marginRight: 10,
    color: textColor,
  },
  imageContainer: {
    borderWidth: 1,
  },
  image: {
    flex: 1,
    maxWidth: 40,
    maxHeight: 40,
  },
});

export class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  onPress() {
    if (this.state.showMore) {
      this.setState({
        showMore: false,
      });
    } else {
      this.setState({
        showMore: true,
      });
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.onPress()} style={styles.weatherContainer}>
        <View style={styles.visible}>
          <View style={styles.textContainer}>
            <Text style={styles.weatherText}>{this.props.weather.date}</Text>
            <Text style={styles.weatherText}>{this.props.weather.weather.description}</Text>
          </View>
          <Image style={styles.image} source={{ uri: this.props.weather.icon }} />
        </View>
        <WeatherMoreDetail showMore={this.state.showMore} weather={this.props.weather} />
      </TouchableOpacity>
    );
  }
}

export default Weather;
