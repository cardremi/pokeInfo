import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

function DetailPoke(props) {
  var poke = props.ListDetailPoke.name;
  var upperPoke = poke.toUpperCase();
  var array1 = props.ListDetailPoke.abilities;
  var array2 = props.ListDetailPoke.held_items;
  var array3 = props.ListDetailPoke.moves;
  var array4 = props.ListDetailPoke.stats;
  var array5 = props.ListDetailPoke.types;
  var abilities = array1.map(x => x.ability.name + ' * ');
  var heldItems = array2.map(x => x.item.name + ' * ');
  var moves = array3.map(x => x.move.name + ' * ');
  var baseStats = array4.map(x => x.base_stat + ' - ')
  var efforts = array4.map(x => x.effort + " * ")
  var nameStats = array4.map(x => x.stat.name + ' : ')
  var types = array5.map(x => x.type.name + ' * ' )
  
  return (
    <View style={styles.cover}>
      <ScrollView>
        <View style={styles.header}>
          <FastImage
            style={styles.tinyLogo}
            source={{
              uri: `${props.ListDetailPoke.sprites.other['official-artwork'].front_default}`,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.nameP}>{upperPoke}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>
              Base Experience:
            </Text>
            {props.ListDetailPoke.base_experience}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Height:</Text>
            {props.ListDetailPoke.height} dm
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Weight</Text>:
            {props.ListDetailPoke.weight} hg
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Abilities:</Text>*{' '}
            {abilities}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Held Items:</Text>*{' '}
            {heldItems}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>
              List of Moves:
            </Text>
            * {moves}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>
              Stats:
            </Text>
            {nameStats[0]}{baseStats[0]} EV:{efforts[0]}
            {nameStats[1]}{baseStats[1]} EV:{efforts[1]}
            {nameStats[2]}{baseStats[2]} EV:{efforts[2]}
            {nameStats[3]}{baseStats[3]} EV:{efforts[3]}
            {nameStats[4]}{baseStats[4]} EV:{efforts[4]}
            {nameStats[5]}{baseStats[5]} EV:{efforts[5]}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>
              Types:
            </Text>
            * {types}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
const mapStateToProps = state => ({
  ListDetailPoke: state.dataReducer.ListDetailPoke,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPoke);
const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#ffde03',
    width: '100%',
    height: '100%',
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    alignContent: 'center',
  },
  abc: {
    fontWeight: '500',
    fontSize: ms(20),
  },
  tinyLogo: {
    width: ms(400),
    height: ms(400),
    alignSelf: 'center',
  },
  body: {
    alignSelf: 'center',
    width: '95%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: ms(6),
    paddingHorizontal: ms(15),
  },
  nameP:{
    fontWeight: 'bold',
    fontSize: ms(20),
    color:'tomato'
  }
});
