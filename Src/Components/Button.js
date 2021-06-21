import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ms } from 'react-native-size-matters';

export default function Button({name, onTap}) {
  return (
    <TouchableOpacity style={styles.press} onPress={onTap}>
      <Text style={styles.text1}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  press: {
      backgroundColor:'#0336ff',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      width:ms(320),
      height:ms(50)
  },
  text1:{
    fontSize:ms(20),
    fontWeight:'600',
    color:'white'
  }
});
