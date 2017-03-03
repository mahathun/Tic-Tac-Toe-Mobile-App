import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
        View,
        Text,
        StyleSheet
      } from 'react-native';

import Cell from './Cell'

//components
import Popup from './Popup.js'
//actions
import * as actions from './../actions/actions';

class GameCanvas extends Component {
  onPlayAgain(){
    var {dispatch,winningStatus,currentPlayerSymbol} = this.props;
    dispatch(actions.addScore(winningStatus, currentPlayerSymbol))
    dispatch(actions.reset());

  }

  render() {
    var {winningStatus} = this.props;
    return (
      <View style={styles.gameCanvasContainer}>

        <View style={styles.gameBoard}>
          <View style={styles.cellRow}>
            <Cell style={styles.cell} key={0} dataId={0} symbol={this.props.board[0]}/>
            <Cell style={styles.cell} key={1} dataId={1} symbol={this.props.board[1]}/>
            <Cell style={styles.cell} key={2} dataId={2} symbol={this.props.board[2]}/>


          </View>
          <View style={styles.cellRow}>
            <Cell style={styles.cell} key={3} dataId={3} symbol={this.props.board[3]}/>
            <Cell style={styles.cell} key={4} dataId={4} symbol={this.props.board[4]}/>
            <Cell style={styles.cell} key={5} dataId={5} symbol={this.props.board[5]}/>

          </View>
          <View style={styles.cellRow}>
            <Cell style={styles.cell} key={6} dataId={6} symbol={this.props.board[6]}/>
            <Cell style={styles.cell} key={7} dataId={7} symbol={this.props.board[7]}/>
            <Cell style={styles.cell} key={8} dataId={8} symbol={this.props.board[8]}/>

          </View>
        </View>
        <Popup show={
                (winningStatus==='won')?true:(winningStatus==='draw')?true:false
              } onConfirm={this.onPlayAgain.bind(this)} message={
                (winningStatus==='won')?'Congratulations, you have won this game. Try playing another one.':'Ohhh, it\'s a draw. Try playing another one.'
               }
               // title={
              //   (winningStatus==='won')?"Tic-Tac-Toe - Congratulations !!! You have won":'Tic-Tac-Toe - It\'s a draw'
              // }
            />
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

export default connect((state)=>{
  return {board:state.board, winningStatus:state.winningStatus,currentPlayerSymbol:state.currentPlayerSymbol}
})(GameCanvas);
