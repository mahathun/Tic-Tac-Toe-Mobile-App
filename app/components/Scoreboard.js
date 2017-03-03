import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';


class Scoreboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.player1Board}>
          <View style={styles.player1TextContainer}>
            <Text style={styles.player1Text}>Player 1</Text>
          </View>
        </View>
        <View style={styles.player2Board}>
          <View style={styles.player2TextContainer}>
            <Text style={styles.player2Text}>Player 2</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:80,
    padding:8,
    backgroundColor:'#747577',
  },
  player1Board:{
    flex:1,
    backgroundColor:'hsla(225,3%,75%,.44)',
    borderColor:'black',
    marginRight:4,
  },
  player2Board:{
    flex:1,
    backgroundColor:'hsla(225,3%,75%,.44)',
    marginLeft:4,
  },
  player1Text:{
    textAlign:'center',
    fontSize:20,
    color:'#efefd0',
    fontWeight:'bold',
    backgroundColor:'grey',
  },
  player1TextContainer:{
    backgroundColor:'grey',
    flex:1,
    justifyContent:'center',
  },
  player2Text:{
    textAlign:'center',
    fontSize:20,
    color:'#efefd0',
    fontWeight:'bold',
    backgroundColor:'grey',
  },
  player2TextContainer:{
    backgroundColor:'grey',
    flex:1,
    justifyContent:'center',
  }
});

export default Scoreboard;
