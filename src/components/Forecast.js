import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import Header from './Header';
import Body from './Body';

const wallpaper = require('../images/beautiful_light_blue_sky-wallpaper-480x800.jpg');

const styles = {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
};

export class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wallpaper,
    };
  }

  componentWillMount() {
    if (this.props.wallpaper) {
      const image = require(this.props.wallpaper);
      this.setState({
        wallpaper: image,
      });
    }
  }

  render() {
    // console.log(this.props);
    return (
      <Image source={this.state.wallpaper} style={styles.container}>
        <NavBar navigation={this.props.navigation} />
        <Header
          locationData={this.props.locationData}
          OWCurrentWeather={this.props.OWCurrentWeather}
        />
        <Body />
      </Image>
    );
  }

}

function mapStateToProps(state) {
  return ({
    wallpaper: state.Geolocation.selectedWallpaper,
    locationData: state.Geolocation.locationData,
    OWCurrentWeather: state.OpenWeather.currentWeather,
  });
}

export default connect(mapStateToProps, null)(Forecast);
