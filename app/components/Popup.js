import React, {Component} from 'react';

import {View, Text, Button, StyleSheet} from 'react-native'

class Popup extends Component {
  render(){
    if(this.props.show){
      return (
        <View ref='popup' className="popup">
          <View className="messageHeader">
            <Text className="title">
              {this.props.title}
            </Text>
          </View>
          <Text style={styles.messageBody}>
            {this.props.message}
          </Text>
          <View className="messageFooter">
            {/* <a href="#" className="button" onClick={this.props.onConfirm}>{this.props.confirmText}</a> */}
            <Button
              onPress={this.props.onConfirm}
              title={this.props.confirmText}
              color="#841584"
              accessibilityLabel=""
            />
          </View>
        </View>
      );
    }else{
      return null;
    }
  }
}

const styles = StyleSheet.create({
  messageBody:{
    backgroundColor:'rgba(255, 255, 255, 0.74)',
    fontSize:20,
  }
});
Popup.defaultProps = {
  confirmText:'Okay',
  closeText:'Close',
  message: 'This is a popup',
  // title: 'This is a title'
}

export default Popup;
