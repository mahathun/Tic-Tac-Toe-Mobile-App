import React, {Component} from 'react';

import {
        View,
        Text,
        StyleSheet
      } from 'react-native';

import Cell from './Cell'

class GameCanvas extends Component {
  render() {
    return (
      <View style={styles.gameCanvasContainer}>

        <View style={styles.gameBoard}>
          <View style={styles.cellRow}>
            <Cell style={styles.cell}/>
            <Cell style={styles.cell}/>
            <Cell style={styles.cell}/>

          </View>
          <View style={styles.cellRow}>
            <Cell style={styles.cell}/>
            <Cell style={styles.cell}/>
            <Cell style={styles.cell}/>
          </View>
          <View style={styles.cellRow}>
            <Cell style={styles.cell}/>
            <Cell style={styles.cell}/>
            <Cell style={styles.cell}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameCanvasContainer:{
    backgroundColor:'rgb(125, 120, 122)',
    flex:1,
  },
  gameBoard:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  cellRow:{
    flexDirection:'row'
  },

});

export default GameCanvas;
