import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import AlertButton from '../react-native-calculator/Components/Button/Button'

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

// --- Calculator Layout --- //

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    }
  }
  render() {
    return(
      <View style={{flex: 1}}>

        <View style={styles.ioDisplay}>
          <Text style={styles.ioText}>{this.state.currentValue}</Text>
        </View>

        <View style={styles.calcButtonContainer}>
          {/* Row 1 */}
        <View style={styles.calcRow1}>
        <View style={styles.calcButton1}>
          <Text style={styles.calcText}>A/C</Text>
        </View>
        <View style={styles.calcButton2}>
          <Text style={styles.calcText}> +/- </Text>
        </View>
        <View style={styles.calcButton1}>
          <Text style={styles.calcText}> % </Text>
        </View>
        <View style={styles.calcButton2}>
          <Text style={styles.calcText}> / </Text>
        </View>
        </View>
        {/* Row 2 */}
        <View style={styles.calcRow2}>
        <View style={styles.calcButton1}>
          <Text style={styles.calcText}> 7 </Text>
        </View>
        <View style={styles.calcButton2}>
          <Text style={styles.calcText}> 8 </Text>
        </View>
        <View style={styles.calcButton1}>
          <Text style={styles.calcText}> 9 </Text>
        </View>
        <View style={styles.calcButton2}>
          <Text style={styles.calcText}> x </Text>
        </View>
        </View>
        {/* Row 3 */}
        <View style={styles.calcRow1}>
        <View style={styles.calcButton1}>
          <Text style={styles.calcText}> 4 </Text>
        </View>
        <View style={styles.calcButton2}>
        <Text style={styles.calcText}> 5 </Text>
        </View>
        <View style={styles.calcButton1}>
        <Text style={styles.calcText}> 6 </Text>
        </View>
        <View style={styles.calcButton2}>
        <Text style={styles.calcText}> - </Text>
        </View>
        </View>
        {/* Row 4 */}
        <View style={styles.calcRow2}>
        <View style={styles.calcButton1}>
        <Text style={styles.calcText}> 1 </Text>
        </View>
        <View style={styles.calcButton2}>
        <Text style={styles.calcText}> 2 </Text>
        </View>
        <View style={styles.calcButton1}>
        <Text style={styles.calcText}> 3 </Text>
        </View>
        <View style={styles.calcButton2}>
        <Text style={styles.calcText}> + </Text>
        </View>
        </View>
        {/* Row 5 */}
        <View style={styles.calcRow1}>
        <View style={styles.calcButton3}>
        <Text style={styles.calcText}> 0 </Text>
        </View>
        <View style={styles.calcButton1}>
        <Text style={styles.calcText}> . </Text>
        </View>
        <View style={styles.calcButton2}>
        <Text style={styles.calcText}> = </Text>
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
    justifyContent: 'flex-end'
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
