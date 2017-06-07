import React from 'react';
import {  View, Text, ScrollView, ActivityIndicator } from 'react-native';
import {  connect } from 'react-redux';
import Axios from 'axios';

import HourlyForecastBar from './HourlyForecastBar';
import Weather from './Weather';

import { fetchDailyForecast, fetchHourlyForecast } from '../store/OpenWeather/action';

const convertTime = (oriDate) => {
    let fullDate = new Date(oriDate);
    let hour = String(fullDate.getHours());
    if(hour.length === 1) {
        hour = '0' + hour;
    }
    let minute = String(fullDate.getMinutes());
    if(minute.length === 1) {
        minute = '0' + minute;
    }
    let second = String(fullDate.getSeconds());
    if(second.length === 1) {
        second = '0' + second;
    }
    return `${hour}-${minute}-${second}`;
}

export class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weathers: [],
      updatedAt: null
    }
  }

  convertDate(oriDate) {
    if(oriDate !== null) {
      let fullDate = new Date(oriDate);
      let year = fullDate.getFullYear();
      let month = String(fullDate.getMonth() + 1);
      if(month.length === 1) {
          month = '0' + month;
      }
      let date = String(fullDate.getDate());
      if(date.length === 1) {
          date = '0' + date;
      }
      return `${year}-${month}-${date}`;
    } else {
      return '-';
    }

  }

  render() {
    console.log(this.props);
    if(this.props.dailyForecast.length > 0) {
      return (
        <ScrollView style={styles.container}>
          <HourlyForecastBar hourlyForecast={this.props.hourlyForecast}/>
          <ScrollView style={styles.body}>
            {this.props.dailyForecast.map( (weather, index) => {
              return (
                <Weather key={index} weather={weather}/>
              )
            })}
          </ScrollView>
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.loadingText}>
          <ActivityIndicator size="large"/>
          <Text>Loading Weather Forecast ..</Text>
        </View>
      );
    }

  }

  getNewData() {
    // console.log('getting new data')
    if(this.props.locationData) {
      let maxIndex = this.props.locationData.results.length - 1;
      // console.log(this.props.locationData.results[6].geometry.location)
      this.props.fetchDailyForecast(this.props.locationData.results[maxIndex].geometry.location);
      this.props.fetchHourlyForecast(this.props.locationData.results[maxIndex].geometry.location);
    }
  }

  checkUpdatedAt() {
    // console.log('checking updated time');
    // console.log('updated at: ', this.state.updatedAt);
    let now = new Date();
    if(this.state.updatedAt !== null) {
      let lastUpdate = new Date(this.state.updatedAt);
      console.log((now.getMinutes() - lastUpdate.getMinutes())/(1000*60));
      return ((now.getMinutes() - lastUpdate.getMinutes())/(1000*60)) > 30
    } else {
      return false
    }
  }

  // updateDailyForecast() {
  //   console.log('updating daily forecast')
  //   console.log(this.checkUpdatedAt());
  //   if(this.props.locationData) {
  //     if(this.state.updatedAt === null) {
  //         this.getNewData();
  //     }
  //   }
  // }

  componentDidUpdate() {
    console.log('body is updated')
  }

  componentDidMount() {
    this.getNewData();
  }

}

const styles = {
  container: {

  },
  body: {
    // backgroundColor: '#F6F6F6',
    padding: 5,
    margin: 10
  },
  weatherContainer: {
    // backgroundColor: '#1EE494'
  },
  weatherText: {
    fontSize: 24,
    // color: '#009378'
  },
  loadingText: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
    locationData: state.Geolocation.locationData,
    dailyForecast: state.OpenWeather.dailyForecast,
    hourlyForecast: state.OpenWeather.hourlyForecast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDailyForecast: (coord) => dispatch(fetchDailyForecast(coord)),
    fetchHourlyForecast: (coord) => dispatch(fetchHourlyForecast(coord))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
