import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

import Landing from './components/landing';
import SignUp from './components/auth/signup';
import SignIn from './components/auth/signin';
import { initFirebase } from './utils/api';
import { middle_blue_purple, white, independence } from './utils/colors';

function JusBussStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount() {
    initFirebase();
  }
  
  render() {
    const navOptions = {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: independence
      }
    }

    const MainNavigator = StackNavigator({
      Home: {
        screen: Landing,
        navigationOptions: { ...navOptions, title: 'JusBuss' }
      },
      SignUp : {
        screen: SignUp,
        navigationOptions: { ...navOptions, title: 'JusBuss - Sign Up' }
      },
      SignIn : {
        screen: SignIn,
        navigationOptions: { ...navOptions, title: 'JusBuss - Sign In' }
      }
    });

    return (
      <View style={{flex: 1}}>
        <JusBussStatusBar backgroundColor={middle_blue_purple} barStyle='light-content' />
        {console.log(MainNavigator)}
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
