import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from './colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={style.btnContainer}></View>
    <Text style={style.title}>{title}</Text>
  </TouchableOpacity>;
};

export {PrimaryButton};

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    alignSelf:'center',
    color: COLORS.white,
    fontWeight:'bold', 
    fontSize:18,
    bottom:40

  }

}
)