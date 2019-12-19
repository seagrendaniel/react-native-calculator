import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../react-native-calculator/Components/Button/Button'

export default class App extends Component {
  render() {
    let smileyFace = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/2000px-Mr._Smiley_Face.svg.png'
    }

    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>My Name is {this.props.name}</Text>
        <Image source={smileyFace} style={{ width: 250, height: 500 }} />
        <Text>I'm trying to learn React Native</Text>
      </View>
    );
  }
}

export default class Person extends Component {
  render() {
    return (
      <View>
        
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
