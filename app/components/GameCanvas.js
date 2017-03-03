import React, {Component} from 'react';

import {
        View,
        Text,
        StyleSheet
      } from 'react-native';

class GameCanvas extends Component {
  render() {
    return (
      <View style={styles.gameCanvasContainer}>
        <Text>
          Game Canvas
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameCanvasContainer:{
    flex:1,
    backgroundColor:'rgb(125, 120, 122)'
  }
});

export default GameCanvas;
