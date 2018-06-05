import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';
import LoginPage from './screens/LoginPage';
import {StackNavigation} from './navigation/router';

export default class App extends React.Component {
  render() {
    return <StackNavigation/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
