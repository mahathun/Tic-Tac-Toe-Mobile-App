import React, {Component} from 'react'

import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

class Cell extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.touchContainer} onPress={this._onPressButton}>
        <View style={styles.cell}>
          <Text style={styles.cellText}>
            X
          </Text>
        </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchContainer:{

    margin:10
  },
  cell:{
    backgroundColor:'rgb(193, 165, 113)',
    height:100,
    width:100,
    borderRadius:8,
    borderColor:'rgb(175, 139, 72)',
    borderWidth:8,
    justifyContent:'center'
  },
  cellText:{
    color:'white',
    fontSize:30,
    textAlign:'center',
    fontWeight:'bold'
  }
})
export default Cell
