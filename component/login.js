import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
    state = {
      username: '',
      password: '',
    }
  }

  static navigationOptions = {
    title: 'Login'
  }

  login = async () => {
    console.log('In login')
    if (this.state.email != '' && this.state.password != '') {
      fetch('https://sso.genius.estiam.com/apiLogin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        console.log('in then 1')
        return res.json()
      }).then(data => {
        console.log(data)
        if (data.sToken) {
          console.log("if sToken: ", data)
          this.props.navigation.navigate('Home')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            id="username"
            onChangeText={(username) => this.setState({ username })} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            id="password"
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={ this.login }>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});