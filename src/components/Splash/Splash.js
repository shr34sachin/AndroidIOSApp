import React, {Component} from 'react';
import {View,
  Text,
  StyleSheet
} from 'react-native';

export default class Splash extends Component {
  render(){
    return (
      <View style = {myStyle.wrapper}>
        <View style = {myStyle.titleWrapper}>
          <Text style = {myStyle.title}>Android IOS app</Text>
        </View>
        <View>
          <Text style = {myStyle.subtitle}>Powered by React Native</Text>
        </View>
      </View>
    )
  }
}

const myStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20
  },
  titleWrapper: {
    justifyContent: 'center',
    flex: 1
  }
}
);
