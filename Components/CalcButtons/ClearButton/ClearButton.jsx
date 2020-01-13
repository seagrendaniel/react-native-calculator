import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

class ClearButton extends Component {
  render() {
    return(
      <View>
        <Button
          style={styles.calcText}
          onPress={() => {
            alert('You pressed the Clear button');
          }}
          title='A/C'
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

export default ClearButton;
