import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import InputField from '../common/InputField';
import { middle_blue_purple, white } from '../../utils/colors';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    username_err: '',
    password_err: ''
  }

  validate(field, fieldName, errorState) {
    field === ''
    ?
    this.setState({ [errorState]: `${fieldName} field is required` })
    :
    field.length < 2
    ?
    this.setState({ [errorState]: `${fieldName} should be more than one (1) character` })
    :
    this.setState({ [errorState]: '' })
  }

  onSubmit() {
    let hasErrors = false;
    const {
      username,
      password,
    } = this.state;

    this.validate(username, "Username", "username_err");
    this.validate(password, "Password", "password_err");
  }

  render() {
    const { container, logoContainer, footerContainer, button } = styles;

    return (
      <View style={{flex: 1, backgroundColor: white}}>
        <View style={container}>
          <View style={logoContainer}>
            <Image
              source={require('../../utils/images/logo.png')}
            />
          </View>

          <InputField
            label="Username"
            secure={false}
            value={this.state.username}
            onchange={text => this.setState({username: text})}
            err={this.state.username_err}
          />

          <InputField
            label="Password"
            secure={true}
            value={this.state.password}
            onchange={text => this.setState({password: text})}
            err={this.state.password_err}
          />
        </View>

        <View style={footerContainer}>
          <TouchableOpacity
            onPress={this.onSubmit.bind(this)}
            style={button}>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: white, fontSize: 18}}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: white,
    padding: 20
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  button: {
    padding: 20,
    width: 150,
    backgroundColor: middle_blue_purple,
    borderRadius: 10
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: 20
  }
})

export default SignIn;
