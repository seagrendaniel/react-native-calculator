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
import DecButton from './Components/CalcButtons/DecButton/DecButton';


// --- Constants Definitions --- //

const operatorArr = ['+', '-', '/', '*' ]
const mathOperators = {
  'add': function(x,y) {return (x + y)},
  'sub': function(x,y) {return (x - y)},
  'mult': function(x,y) {return (x * y)},
  'div': function(x,y) {return (x / y)}
 }

// --- Calculator Layout --- //

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
      operatorValue: null,
      storedValue: 0,
      finalValue: 0
    }
    // this.onNumberButtonPress.bind(this)
  }
  onNumberButtonPress = (value) => {
    this.setState({
      currentValue: value
    });
  }

  checkBtnPress(keyPress) {
    if(!isNaN(parseFloat(keyPress)) || keyPress === '.') {
      this.setState({currentValue: (this.state.currentValue += keyPress)});
    } else if(keyPress === '+' || keyPress === '-' || keyPress === '*' || keyPress === '/') {
        storedValue = parseFloat(currentValue);
        if(keyPress === '+') {
          operatorValue = mathOperators[add];
        }
        else if(keyPress === '-') {
          operatorValue = mathOperators[sub];
        }
        else if(keyPress === '*') {
          operatorValue = mathOperators[mult];
        }
        else if(keyPress === '/') {
          operatorValue = mathOperators[div];
        }
        else if(keyPress === '=') {
          // Solve function TO BE WRITTEN
        }
    } return;
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
                // checkBtnPress={this.checkBtnPress}
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
              <DecButton 
                value='.'
              />
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
