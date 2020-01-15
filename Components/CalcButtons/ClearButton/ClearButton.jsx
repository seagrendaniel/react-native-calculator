import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

class ClearButton extends Component {
  render() {
    return(
      <View>
        <Button
          style={styles.calcText}
          onPress={() => {this.props.checkBtnPress(this.props.value)}}
          title='A/C'
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

export default ClearButton;
