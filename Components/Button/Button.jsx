import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

class AlertButton extends Component {
  render(){
    return(
      <Button
        onPress={() => {
          alert('You pressed me so hard!');
        }}
        title='Press me!'
      />
    )
  }
}

export default AlertButton;
