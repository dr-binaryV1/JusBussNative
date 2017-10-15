import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import { middle_blue_purple, white, space_cadet } from '../../utils/colors';
import InputField from '../common/InputField';

class SignUp extends Component {
  state = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: '',
    username_err: '',
    firstname_err: '',
    lastname_err: '',
    email_err: '',
    password_err: '',
    confirm_password_err: '',
    loading: false
  }

  onSubmit() {
    let hasErrors = false;
    const {
      username,
      firstname,
      lastname,
      email,
      password,
      confirm_password
    } = this.state;

    this.validate(username, "Username", "username_err");
    this.validate(firstname, "First Name", "firstname_err");
    this.validate(lastname, "Last Name", "lastname_err");
    this.validate(password, "Password", "password_err");
    this.validate(confirm_password, "Confirm Password", "confirm_password_err");
    this.validateEmail(email, "email_err");

    this.setState({ loading: true })
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

  validateEmail(field, errorState) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    field === ''
    ?
    this.setState({ [errorState]: 'Email field is required'})
    :
    re.test(field)
    ?
    this.setState({ [errorState]: ''})
    :
    this.setState({ [errorState]: 'Email invalid' })
  }

  render() {
    const {
      headerContainer,
      footerContainer,
      button
    } = styles;

    return (
      <ScrollView style={{ backgroundColor: white, flex: 1 }}>
        <View style={headerContainer}>
          <Image
            style={{height: 50, width: 100}}
            source={require('../../utils/images/logo.png')}
          />
        </View>

        <View style={{padding: 20, flex: 1}}>
          <InputField
            label="Username"
            secure={false}
            value={this.state.username}
            onchange={text => this.setState({username: text})}
            err={this.state.username_err}
          />

          <InputField
            label="First Name"
            secure={false}
            value={this.state.firstname}
            onchange={text => this.setState({firstname: text})}
            err={this.state.firstname_err}
          />

          <InputField
            label="Last Name"
            secure={false}
            value={this.state.lastname}
            onchange={text => this.setState({lastname: text})}
            err={this.state.lastname_err}
          />

          <InputField
            label="Email Address"
            secure={false}
            value={this.state.email}
            onchange={text => this.setState({email: text})}
            err={this.state.email_err}
          />

          <InputField
            label="Password"
            secure={true}
            value={this.state.password}
            onchange={text => this.setState({password: text})}
            err={this.state.password_err}
          />

          <InputField
            label="Confirm Password"
            secure={true}
            value={this.state.confirm_password}
            onchange={text => this.setState({confirm_password: text})}
            err={this.state.confirm_password_err}
          />
        </View>

        <View style={footerContainer}>
          {this.state.loading
            ?
            <ActivityIndicator size={50} color={space_cadet} />
            :
            <TouchableOpacity
              onPress={this.onSubmit.bind(this)}
              style={button}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: white, fontSize: 18}}>Sign up</Text>
              </View>
            </TouchableOpacity>
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flex: 1
  },
  footerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    marginBottom: 20
  },
  button: {
    padding: 20,
    width: 150,
    backgroundColor: middle_blue_purple,
    borderRadius: 10
  }
})

export default SignUp;
