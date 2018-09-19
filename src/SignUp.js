
import React, { Component } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Auth } from 'aws-amplify' 


export default class SignUp extends Component {
  state = {
    username: '',
    password: '',
    phone_number: '',
    email: '',
    confirmationCode: ''
  }
  onChangeText(key,value) {
    this.setState({
      [key]: value
    })
  }
  signUp() {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email,
        phone_number: this.state.phone_number
      }
    })
    .then(() => console.log('successful sign up!'))
    .catch(err => console.log('error signing up!: ', err))
  }
  confirmSignUp() {
    Auth.confirmSignUp(this.state.username,this.state.confirmationCode)
    .then(() => console.log('successful confirming sign up!'))
    .catch(err => console.log('error confirming signing up!: ', err))
  }
  render() {
    return (
        <View style={styles.container}>
          <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder='username' 
          />
          <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='password' 
          />
          <TextInput
          onChangeText={value => this.onChangeText('phone_number', value)}
          style={styles.input}
          placeholder='phone_number' 
          />
          <TextInput
          onChangeText={value => this.onChangeText('email', value)}
          style={styles.input}
          placeholder='email' 
          />
          <Button title='Sign Up' onPress={this.signUp.bind(this)} />
          <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='Confirmation Code' 
          />
          <Button title='Confirm Sign Up' onPress={this.confirmSignUp.bind(this)} />
        </View>
    );
  }
}



const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
