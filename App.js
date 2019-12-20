import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../react-native-calculator/Components/Button/Button'

class BlinkGreeting extends Component {

  componentDidMount() {
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null
    }

      return (
        <View>
          <Text style={{top: 75}}> Hello my name is {this.props.name}</Text>
        </View>
      );
    
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'lightblue'}}>
        <BlinkGreeting name={'Dan'} />
        </View>
        <View style={{flex: 2, backgroundColor: 'lightgreen'}}>
        <BlinkGreeting name={'Talia'} />
        </View>
        <View style={{flex: 3, backgroundColor: 'red'}}>
        <BlinkGreeting name={'Remi'} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    right: 500,
    top: 150,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    alignItems: 'center'
  },
  container: {
    flex: 1
  }
});
