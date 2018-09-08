/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import Splash from './src/components/Splash/Splash';
import Login from './src/components/Login/Login';

// Sept 08, 2018 - for navigation between pages
// import {StackNavigator} from 'react-navigation';
import NavigationApp from './src/components/NavigationApp/NavigationApp';

// import Greeting from './app/components/TestProps';

// import { AppRegistry } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {

class Greeting extends Component {
 render() {
   return (
     <Text>Hello {this.props.name}!</Text>
   );
 }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class App extends Component{
  render() {
    return (
      // <Login></Login>
      <NavigationApp></NavigationApp>
    );
  }
}

const myStyle = StyleSheet.create({
    redColor: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    viewStyling50: {
      height: 50,
      width: 50,
      backgroundColor: 'red',
    },
    viewStyling150: {
      height: 150,
      width: 150,
      backgroundColor: 'green',
    },
}
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// <View style={styles.container}>
//   <Text style={styles.welcome}>Welcome to React Native!</Text>
//   <Text style={styles.instructions}>still working?</Text>
//   <Text style={styles.instructions}>{instructions}</Text>
// </View>

// <View>
//   <View style={myStyle.viewStyling50}>
//     <Text>Hello world</Text>
//   </View>
//
//   <View style={myStyle.viewStyling150}>
//     <Blink text="This is blinking"></Blink>
//   </View>
//
//   <Text style={myStyle.redColor}>Hello world</Text>
//   <Greeting name='sachin'></Greeting>
//   <Blink text="This is blinking"></Blink>
//
//   <Text>Name: </Text>
//
//   <TextInput style={{height: 40}}
//     placeholder="Enter your name">
//   </TextInput>
//
//   <Button
//     onPress={() => {
//       Alert.alert('You pressed the button');
//     }
//     }
//     title = 'press me'>
//   </Button>
//
// </View>
