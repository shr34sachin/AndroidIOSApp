import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';

import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <View style = {myStyle.container}>
          <StatusBar barStyle = "Light-content"/>
          <TextInput
            placeholder = "username or email"
            placeholderTextColor = "rgba(255,255,255,0.7)"
            returnKeyType = "next"
            onSubmitEditing = {() => this.passwordInput.focus()}
            keyboardType = "email-address"
            autoCapitalize = "none"
            autoCorrect = {false}
            style = {myStyle.input}/>
          <TextInput
            placeholder = "password"
            placeholderTextColor = "rgba(255,255,255,0.7)"
            secureTextEntry
            returnKeyType = "Go"
            ref = { (input) => this.passwordInput = input}
            style = {myStyle.input}/>

          <TouchableOpacity style = {myStyle.buttonContainer}>
            <Text style = {myStyle.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const myStyle = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
