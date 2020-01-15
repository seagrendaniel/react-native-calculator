import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

class NumberButton extends Component {
  render() {
    return(
      <View>
        <Button
          style={styles.calcText}
          onPress={() => {this.props.onNumberButtonPress(this.props.value)}}
            // alert(`You pressed the ${this.props.value} button`)
          title={this.props.value}
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

export default NumberButton;
