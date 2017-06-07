import React from 'react';
import { View,
  Text,
  TouchableOpacity } from 'react-native';

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

class NavBar extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity><Text>Forecast</Text></TouchableOpacity>
        <TouchableOpacity><Text>Expansion</Text></TouchableOpacity>
      </View>
    );
  }

}

export default NavBar;
