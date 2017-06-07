import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  header: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  cityName: {
    fontSize: 16,
    justifyContent: 'center',
  },
  currentTemp: {
    fontSize: 12,
  },
};

export class Header extends React.Component {
  render() {
    const maxIndex = this.props.locationData.results.length - 1;
    return (
      <View style={styles.header}>
        <Text style={styles.cityName}>
          {this.props.locationData.results[maxIndex].formatted_address}
        </Text>
      </View>
    );
  }
}

export default Header;
