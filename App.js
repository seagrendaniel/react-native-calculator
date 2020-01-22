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


// --- Constant Definitions --- //

const mathOperators = {
  '+': function (x, y) { return (x + y) },
  '-': function (x, y) { return (x - y) },
  '*': function (x, y) { return (x * y) },
  '/': function (x, y) { return (x / y) },
  'abs': function (x) { return (abs(x)) }
}

// --- Calculator Layout --- //

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      operatorValue: null,
      storedValue: 0,
      afterEqValue: 0,
      eqPressed: false
    }
  }

  // button logic - to split later
  checkBtnPress = keyPress => {

    // check for storedValue
    if (this.state.storedValue) {
      if (!isNaN(parseFloat(keyPress))) {
        this.setState({
          currentValue: parseFloat(this.state.currentValue + keyPress)
        })
      }
      else if (keyPress === '.') {
        let cV = this.state.currentValue.toString() + keyPress;
        this.setState({
          currentValue: cV,
          storedValue: cV
        })
      }
      else if (keyPress in mathOperators) {
        this.setState({
          currentValue: 0,
          storedValue: this.state.currentValue,
          operatorValue: mathOperators[keyPress]
        })
      } else if (keyPress === '=') {
        if (this.state.eqPressed) {
          this.setState({
            currentValue: 0,
            storedValue: this.state.operatorValue(this.state.afterEqValue, parseFloat(this.state.currentValue)),
            operatorValue: null,
            
          })

        } else {
          this.setState({
            currentValue: 0,
            storedValue: this.state.operatorValue(this.state.storedValue, parseFloat(this.state.currentValue)),
            afterEqValue: this.state.operatorValue(this.state.storedValue, parseFloat(this.state.currentValue)),
            operatorValue: null,
            eqPressed: !this.state.eqPressed
          })
        }
      } else if (keyPress === ('+/-')) {
        if (this.state.currentValue[0] === '-') {
          this.setState({ currentValue: parseFloat(this.state.currentValue.slice(1)) });
        } else {
          let cV = '-' + this.state.currentValue
          this.setState({ currentValue: parseFloat(cV) })
        }
      }

      else if (keyPress === 'A/C') {
        this.setState({
          currentValue: 0,
          storedValue: 0,
          operatorValue: null,
          afterEqValue: 0,
          eqPressed: false
        })
      }
      return;
    } else {                                                  // if there is not a stored value (or sV === 0)
      if (!isNaN(parseFloat(keyPress))) {
        let cV;
        keyPress = parseFloat(keyPress);

        if (this.state.currentValue) {
          this.setState({
            currentValue: this.state.currentValue + keyPress,
          })
        } else {
          this.setState({
            currentValue: 0 + keyPress,
          });
        }
        cV = keyPress;
        this.setState({ storedValue: parseFloat(cV) })
      }
      else if (keyPress === 'A/C') {
        this.setState({
          currentValue: 0,
          storedValue: 0,
          operatorValue: null
        })
      }
    }
    return;
  }

  // render function
  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.ioDisplay}>
          <Text style={styles.ioText}> cV: {this.state.currentValue || this.state.storedValue || this.state.afterEqValue}({typeof this.state.currentValue}) & sV: {this.state.storedValue}({typeof this.state.storedValue})</Text>
        </View>

        <View style={styles.calcButtonContainer}>
          {/* Row 1 */}
          <View style={styles.calcRow1}>
            <View style={styles.calcButton1}>
              <ClearButton
                value='A/C'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <PolarButton
                value='+/-'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton1}>
              <PercentButton />
            </View>
            <View style={styles.calcButton2}>
              <DivButton
                value='/'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
          </View>
          {/* Row 2 */}
          <View style={styles.calcRow2}>
            <View style={styles.calcButton1}>
              <NumberButton
                value='7'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <NumberButton
                value='8'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton1}>
              <NumberButton
                value='9'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <MultButton
                value='*'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
          </View>
          {/* Row 3 */}
          <View style={styles.calcRow1}>
            <View style={styles.calcButton1}>
              <NumberButton
                value='4'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <NumberButton
                value='5'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton1}>
              <NumberButton
                value='6'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <SubButton
                value='-'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
          </View>
          {/* Row 4 */}
          <View style={styles.calcRow2}>
            <View style={styles.calcButton1}>
              <NumberButton
                value='1'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <NumberButton
                value='2'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton1}>
              <NumberButton
                value='3'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <AddButton
                value='+'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
          </View>
          {/* Row 5 */}
          <View style={styles.calcRow1}>
            <View style={styles.calcButton3}>
              <NumberButton
                value='0'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton1}>
              <DecButton
                value='.'
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
            </View>
            <View style={styles.calcButton2}>
              <EqButton
                value='='
                currentValue={this.state.currentValue}
                checkBtnPress={this.checkBtnPress}
              />
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
