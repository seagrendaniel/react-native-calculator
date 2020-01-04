import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

class AlertButton extends Component {
  render(){
    return(
      <View style={styles.container}>
      <Button
        style={styles.orangeButton}
        onPress={() => {
          alert('You pressed me so hard!');
        }}
        title='Press here'
        color='purple'
      />

      <Button 
      style={styles.orangeButton}
      onPress={() => {
        alert('You pressed the other button')
      }}
      title='Button 2'
      color='red'
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 75,
  },
  orangeButton: {
    margin: 20,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: '#fff'
  }
  
})

export default AlertButton;
