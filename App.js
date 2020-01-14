import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import AddButton from '../react-native-calculator/Components/CalcButtons/AddButton/AddButton';
import ClearButton from '../react-native-calculator/Components/CalcButtons/ClearButton/ClearButton';
import DivButton from '../react-native-calculator/Components/CalcButtons/DivButton/DivButton';
import EqButton from '../react-native-calculator/Components/CalcButtons/EqButton/EqButton';
import MultButton from '../react-native-calculator/Components/CalcButtons/MultButton/MultButton';
import NumberButton from '../react-native-calculator/Components/CalcButtons/NumberButton/NumberButton';
import PercentButton from '../react-native-calculator/Components/CalcButtons/PercentButton/PercentButton';
import PolarButton from '../react-native-calculator/Components/CalcButtons/PolarButton/PolarButton';
import SubButton from '../react-native-calculator/Components/CalcButtons/SubButton/SubButton';


// --- Calculator Layout --- //

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      operatorValue: null,
      storedValue: 0
    }
    // this.onNumberButtonPress.bind(this)
  }
  onNumberButtonPress = () => {
    this.setState({
      currentValue: value
    })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.ioDisplay}>
          <Text style={styles.ioText}>{this.state.currentValue}</Text>
        </View>

        <View style={styles.calcButtonContainer}>
          {/* Row 1 */}
          <View style={styles.calcRow1}>
            <View style={styles.calcButton1}>
              <ClearButton />
            </View>
            <View style={styles.calcButton2}>
              <PolarButton />
            </View>
            <View style={styles.calcButton1}>
              <PercentButton />
            </View>
            <View style={styles.calcButton2}>
              <DivButton />
            </View>
          </View>
          {/* Row 2 */}
          <View style={styles.calcRow2}>
            <View style={styles.calcButton1}>
              <NumberButton
                value='7'
                currentValue={this.state.currentValue}
                onNumberButtonPress={this.onNumberButtonPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <NumberButton
                value='8'
              />
            </View>
            <View style={styles.calcButton1}>
              <NumberButton
                value='9'
              />
            </View>
            <View style={styles.calcButton2}>
              <MultButton />
            </View>
          </View>
          {/* Row 3 */}
          <View style={styles.calcRow1}>
            <View style={styles.calcButton1}>
              <NumberButton
                value='4'
              />
            </View>
            <View style={styles.calcButton2}>
              <NumberButton
                value='5'
              />
            </View>
            <View style={styles.calcButton1}>
              <NumberButton
                value='6'
              />
            </View>
            <View style={styles.calcButton2}>
              <SubButton />
            </View>
          </View>
          {/* Row 4 */}
          <View style={styles.calcRow2}>
            <View style={styles.calcButton1}>
              <NumberButton
                value='1'
              />
            </View>
            <View style={styles.calcButton2}>
              <NumberButton
                value='2'
              />
            </View>
            <View style={styles.calcButton1}>
              <NumberButton
                value='3'
              />
            </View>
            <View style={styles.calcButton2}>
              <AddButton />
            </View>
          </View>
          {/* Row 5 */}
          <View style={styles.calcRow1}>
            <View style={styles.calcButton3}>
              <NumberButton
                value='0'
              />
            </View>
            <View style={styles.calcButton1}>
              <Text style={styles.calcText}> . </Text>
            </View>
            <View style={styles.calcButton2}>
              <EqButton />
            </View>
          </View>

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
  },
  numberButton: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold'
  },
  ioDisplay: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    borderBottomWidth: 2.5
  },
  calcButtonContainer: {
    flex: 5,
    backgroundColor: 'black',
  },
  calcRow1: {
    flex: 1,
    color: 'lightblue',
    flexDirection: 'row'
  },
  calcRow2: {
    flex: 1,
    color: 'purple',
    flexDirection: 'row'
  },
  calcButton1: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 3,
    borderWidth: 2.5,
    borderColor: 'black',
    justifyContent: 'center'
  },
  calcButton2: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 3,
    borderWidth: 2.5,
    borderColor: 'black',
    justifyContent: 'center'
  },
  calcButton3: {
    flex: 2,
    backgroundColor: 'lightblue',
    borderRadius: 3,
    borderWidth: 2.5,
    borderColor: 'black',
    justifyContent: 'center'
  },
  ioText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right',
    textAlignVertical: 'bottom'
  },
  calcText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  }

});


// --- Reference Code (to be deleted) ---//

// class BlinkGreeting extends Component {

//   componentDidMount() {
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }

//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null
//     }

//       return (
//         <View>
//           <Text style={{top: 75, textAlign: 'center'}}> Hello my name is {this.props.name}</Text>
//         </View>
//       );

//   }
// }

// class NumberInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {number : ''}
//   }
//   render(){
//     return(
//       <View>
//         <Button
//           title='1'
//         />

//       </View>
//     )
//   }
// }

// class NameInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text : ''}
//   }

//   render(){
//     return(
//       <View style={{top: 50, left: 50, textAlign: 'center'}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder='Enter name here!'
//           onChangeText={(text) => this.setState({text})}
//           value={this.state.text}
//         />
//       </View>
//     )
//   }
// }



// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={{flex: 1, backgroundColor: 'lightblue'}}>
//           <Text style={{top: 50, left: 50}}>Hi my name is </Text>
//           <NameInput/>
//           <AlertButton/>
//         <BlinkGreeting name={'Dan'} />
//         </View>
//         <View style={{flex: 1, backgroundColor: 'lightgreen'}}>
//           <Text style={{top: 50, left: 50}}>Hi my name is </Text>
//           <NameInput/>
//           <AlertButton/>
//         {/* <BlinkGreeting name={'Talia'} /> */}
//         </View>
//         <View style={{flex: 1, backgroundColor: 'pink'}}>
//           <Text style={{top: 50, left: 50}}>Hi my name is </Text>
//           <NameInput/>
//           <AlertButton/>
//         {/* <BlinkGreeting name={'Remi'} /> */}
//         </View>
//       </View>
//     )
//   }
// }
