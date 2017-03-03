import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';


class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>
          Header
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    "backgroundColor": 'rgb(191, 173, 196)',
  }
});

export default Header;
