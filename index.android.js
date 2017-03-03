/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

//react-native components
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//my components
import Header from './app/components/Header.js'
import Scoreboard from './app/components/Scoreboard.js'
import GameCanvas from './app/components/GameCanvas'

export default class TestReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>

            <Header />
            <Scoreboard />
            <GameCanvas style={styles.gameCanvas}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(100, 120, 86)'
  },
  gameCanvas:{


  }

});

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
