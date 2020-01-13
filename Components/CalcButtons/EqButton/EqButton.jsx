import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

class EqButton extends Component {
  render() {
    return(
      <View>
        <Button
          style={styles.calcText}
          onPress={() => {
            alert('You pressed the Equal button');
          }}
          title='='
          titleStyle={{
            color: 'black',
            fontSize: 40,
            fontWeight: 'bold'
          }}
          type='clear'
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
    textAlignVertical: 'center',
    color: 'black'
  }
})

export default EqButton;
