import React from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import {ms} from 'react-native-size-matters';

export default function WeaponCard({name,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cover}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.logo}>
          <Image
            style={styles.tinyLogo}
            source={require('../Assets/weapon.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  logo: {
    paddingLeft: ms(40),
  },
  text: {
    fontWeight: '700',
    fontSize: ms(20),
    alignSelf: 'center',
  },
});
