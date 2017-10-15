import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { independence, space_cadet, white } from '../utils/colors';

const Landing = (props) => {
  const {
    container,
    welcomeText,
    headlineText,
    footerContainer,
    button,
    buttonText,
    headerContainer
  } = styles;

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignIn')}>
          <View>
            <Text style={{fontSize: 18}}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={container}>
        <Image
          source={require('../utils/images/logo.png')}
        />

        <Text style={welcomeText}>Welcome to JusBuss</Text>
        <Text style={headlineText}>See what's happening in the world.</Text>
      </View>

      <View style={footerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')}
          style={button}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  headlineText: {
    fontSize: 24
  },
  button: {
    padding: 15,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: white,
    backgroundColor: space_cadet
  },
  buttonText: {
    fontSize: 20,
    color: white
  }
})

export default Landing;
