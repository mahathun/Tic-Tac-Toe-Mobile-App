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

//actions
import * as actions from './app/actions/actions';

//store
import * as store from './app/store/config';
import {Provider} from 'react-redux';
import watch from 'redux-watch';

//initializing the store
var appStore = store.configure({
  currentPlayerSymbol: 'X',
  board:['','','','','','','','',''],
  winningStatus: 'pending',
});

//watching for board changes
var w = watch(appStore.getState, 'board');
//check for a winning combination
appStore.subscribe(w((newVal, oldVal, objectPath) => {
  appStore.dispatch(actions.win(newVal));
}))

export default class TestReactNative extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <View style={styles.container}>
              <Header />
              <Scoreboard />
              <GameCanvas style={styles.gameCanvas}/>

        </View>
      </Provider>
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
