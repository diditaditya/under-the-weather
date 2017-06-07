import React from 'react';
import { Provider, connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';

import HomeScreen from './components/HomeScreen';

import store from './store/configureStore';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
        <View style={{flex:1}}>
          <HomeScreen/>
        </View>
    )
  }

}

const AppWithStore = (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
