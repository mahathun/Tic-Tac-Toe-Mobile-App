import React, {Component} from 'react'

import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
//actions
import * as actions from './../actions/actions'

class Cell extends Component {
  onClick(e){
    var {symbol,dispatch,dataId, currentPlayerSymbol, winningStatus} = this.props;
    if(symbol==='' && winningStatus ==='pending'){
      dispatch(actions.changeCell(dataId,currentPlayerSymbol));
      dispatch(actions.played(currentPlayerSymbol));
    }

  }
  render() {
    return (
      <TouchableOpacity style={styles.touchContainer} onPress={this.onClick.bind(this)}>
        <View style={styles.cell}>
          <Text style={styles.cellText} data={this.props.symbol}>
            {this.props.symbol}
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
export default connect((state)=>{
  return {
    currentPlayerSymbol: state.currentPlayerSymbol,
    winningStatus:state.winningStatus
  }
})(Cell)
