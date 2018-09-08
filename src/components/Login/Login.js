import React, {Component} from 'react';
import {StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
  render(){
    return(
        <View style = {myStyle.container}>
          <View style = {myStyle.logoContainer}>
            <Image
              style = {myStyle.logo}
              source = {require('../../Images/octocat.jpeg')}/>
            <Text style = {myStyle.title}>An app made for github with
              react native for ios as well as android</Text>
          </View>

          <View style = {myStyle.formContainer}>
            <LoginForm></LoginForm>
          </View>

        </View>
    );
  }
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  logo: {
    width: 100,
    height: 100
  },

  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});
