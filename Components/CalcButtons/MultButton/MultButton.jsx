import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

class MultButton extends Component {
  render() {
    return(
      <View>
        <Button
          style={styles.calcText}
          onPress={() => {
            alert('You pressed the Mult button');
          }}
          title='x'
        >
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  calcText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

export default MultButton;
