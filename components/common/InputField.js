import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

import { middle_blue_purple, red, independence } from '../../utils/colors';

const InputField = (props) => {
  const {
    inputStyle,
    labelText,
    button,
    errStyle
  } = styles;

  return (
    <View style={{borderBottomColor: middle_blue_purple}}>
      <Text style={labelText}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secure}
        style={inputStyle}
        value={props.value}
        onChangeText={props.onchange}
      />
      <Text style={errStyle}>{props.err}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  labelText: {
    fontSize: 18,
    color: independence
  },
  button: {
    padding: 20,
    width: 150,
    backgroundColor: middle_blue_purple,
    borderRadius: 10
  },
  errStyle: {
    color: red
  }
})

export default InputField;
