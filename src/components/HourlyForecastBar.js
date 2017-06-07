import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

import HourlyForecastItem from './HourlyForecastItem';

const now = new Date();
let bgColor = '';
if (now.getHours > 5) {
  bgColor = 'rgba(0,0,0,0.5)';
} else if (now.getHours > 18 || now.getHours() >= 0) {
  bgColor = 'rgba(255,255,255,0.5)';
}

const styles = {
  container: {
    backgroundColor: bgColor,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

class HourlyForecastBar extends React.Component {

  render() {
    if (this.props.hourlyForecast) {
      return (
        <View style={styles.container}>
          <ScrollView sytle={{ flexDirection: 'center' }} horizontal>
            {this.props.hourlyForecast.map(item => (
              <View key={item.id}>
                <HourlyForecastItem weather={item} />
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }

    return (
      <View style={styles.loading}>
        <ActivityIndicator />
        <Text>Loading hourly forecast ..</Text>
      </View>
    );
  }

}

export default HourlyForecastBar;
