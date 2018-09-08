import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {StackNavigator} from 'react-navigation';
// import Expo from 'expo';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } =this.props.navigation;
    return (
      <View style = {myStyle.container}>
        <Text
          onPress = { ()=> navigate('Profile') }>Navigate to Profile</Text>
      </View>
    );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } =this.props.navigation;
    return (
      <View style = {myStyle.container}>
        <Text
          onPress = { ()=> navigate('Home') }>Navigate to Home</Text>
      </View>
    );
  }
}

const NavigationApp1 = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: {screen: ProfileScreen },
  // navigationOptions: {
  //   headerStyle: {
  //     marginTop: Expo.Constants.statusBarHeight
  //   }
  // }
});

export default class NavigationApp extends Component {
  render() {
    return <NavigationApp1 />
  }
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
