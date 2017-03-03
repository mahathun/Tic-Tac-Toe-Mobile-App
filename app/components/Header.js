import React, {Component} from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';


class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../res/react-logo.png')} />

        <Text style={styles.title}>
          Tic-Tac-Toe
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    "backgroundColor": '#7f8c8d',
    padding:8,
    flexDirection:'row',

  },
  logo:{
    height:40,
    width:40,
  },
  title:{
    fontWeight:'bold',
    fontSize:25,
    flex:1,
    color:'#fff',
    textAlign:'center'
  }
});

export default Header;
