import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../react-native-calculator/Components/Button/Button'

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text> Hello my name is {this.props.name}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name={'Dan'}/>
        <Greeting name={'Talia'}/>
        <Greeting name={'Remi'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa2',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
});
