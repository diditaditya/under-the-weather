import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  status: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const StatusText = (props) => {
  let status = '';

  if (props.locationData.results) {
    if (props.OWCurrentWeather) {
      if (typeof props.OWCurrentWeather === 'object') {
        status = '';
      } else {
        status = 'Loading Current Weather..';
      }
    } else {
      status = 'Connecting to Weather Servers..';
    }
  } else {
    status = 'Loading Location Data..';
  }

  return (
    <View>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

export default StatusText;
