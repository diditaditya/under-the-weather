/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';



import App from './src/App';

export default class undertheweather extends Component {
  render() {
    return (
        <App />
    );
  }
}




AppRegistry.registerComponent('undertheweather', () => undertheweather);
