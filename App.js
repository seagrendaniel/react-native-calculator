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
          <Text style={styles.bigBlue}> Hello my name is {this.props.name}</Text>
        </View>
      );
    
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
        <BlinkGreeting name={'Dan'} />
        <BlinkGreeting name={'Talia'} />
        <BlinkGreeting name={'Remi'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    top: 150,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    alignItems: 'center'
  }
});
