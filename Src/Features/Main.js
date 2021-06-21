import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ms} from 'react-native-size-matters';
import {Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {actionPoke, actionItem} from '../Components/Action';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function Main(props) {
  const [name, setName] = useState('');
  const [item, setItem] = useState('');
  let lowerName = name.toLowerCase();
  let lowerItem = item.toLowerCase().replace(/ /g, '-');
  const findPoke = () => {
    props.actionPoke(lowerName);
  };
  const getPoke = text => {
    setName(text);
  };
  const findItem = () => {
    props.actionItem(lowerItem);
    console.log("nama",lowerItem);
  };
  const getItem = text => {
    setItem(text);
  };
  return (
    <View style={styles.cover}>
      <View style={styles.header}>
        <Image
          style={styles.tinyLogo}
          source={require('../Assets/pokemonLogo.png')}
        />
        <Text style={styles.abc}>Pokémon Data Provide by PokéAPI</Text>
      </View>
      <View style={styles.bar1}>
        <Text style={styles.abc}>Search Pokémon </Text>
        <Input
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onChangeText={text => getPoke(text)}
          inputContainerStyle={{
            borderRadius: 10,
            borderColor: 'black',
            fontWeight: '700',
            padding: ms(20),
            width: ms(320),
            height: ms(60),
          }}
          placeholder="Pokémon Name"
          placeholderTextColor="black"
          rightIcon={
            <TouchableOpacity onPress={findPoke} style={{paddingRight: ms(10)}}>
              <FontAwesome5
                name="chevron-circle-right"
                size={ms(30)}
                color="blue"
              />
            </TouchableOpacity>
          }
        />
      </View>
      <View>
        <Text style={styles.abc}>Search Item </Text>

        <Input
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onChangeText={text => getItem(text)}
          inputContainerStyle={{
            borderRadius: 10,
            borderColor: 'black',
            fontWeight: '700',
            padding: ms(20),
            width: ms(320),
            height: ms(60),
          }}
          placeholder="Item Name"
          placeholderTextColor="black"
          rightIcon={
            <TouchableOpacity onPress={findItem} style={{paddingRight: ms(10)}}>
              <FontAwesome5
                name="chevron-circle-right"
                size={ms(30)}
                color="blue"
              />
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  actionPoke,
  actionItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#ffde03',
    width: '100%',
    height: '100%',
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    alignContent: 'center',
  },
  input: {
    borderRadius: 10,
    borderWidth: ms(2),
    borderColor: 'black',
    fontWeight: '700',
    padding: ms(20),
    fontSize: ms(20),
    width: ms(320),
    height: ms(60),
  },
  abc: {
    fontWeight: '500',
    fontSize: ms(20),
  },
  tinyLogo: {
    width: ms(200),
    height: ms(100),
    alignSelf: 'center',
  },
  header: {
    alignSelf: 'center',
    marginBottom: ms(40),
  },
  bar1: {
    marginBottom: ms(10),
  },
});
