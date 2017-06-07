import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  location: {
    fontSize: 30,
  },
};

export const HomeScreenLocation = (props) => {
  const maxIndex = props.locationData.results.length - 1;
  return (
    <View>
      <Text style={styles.location}>{props.locationData.results[maxIndex].formatted_address}</Text>
      <Text>Lat: {props.locationData.results[0].geometry.location.lat}</Text>
      <Text>Long: {props.locationData.results[0].geometry.location.lng}</Text>
    </View>
  );
};

export default HomeScreenLocation;
