import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ms} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

function DetailItem(props) {
  var itemName = props.ListDetailItem.name;
  var upperItemName = itemName.toUpperCase();
  var array1 = props.ListDetailItem.held_by_pokemon
  var heldByPoke = array1.map(x => x.pokemon.name + ' * ');
  var array2 = props.ListDetailItem.machines
  var machine = array2.map(x => x.version_group.name + ' * ');
  var array3 = props.ListDetailItem.attributes
  var attribute = array3.map(x => x.name + ' * ');

  return (
    <View style={styles.cover}>
      <ScrollView>
        <View style={styles.header}>
          <FastImage
            style={styles.tinyLogo}
            source={{
              uri: `${props.ListDetailItem.sprites.default}`,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.nameP}>{upperItemName}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Category:</Text>
            {props.ListDetailItem.category.name}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Cost:</Text>
            {props.ListDetailItem.cost}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Effect:</Text>
            {props.ListDetailItem.effect_entries[0].effect}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Attributes:</Text>
            * {attribute}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Fling Effect:</Text>
            {props.ListDetailItem.fling_effect}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Fling Power:</Text>
            {props.ListDetailItem.fling_power}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Held by Pokemon:</Text>
            * {heldByPoke}
          </Text>
          <Text style={styles.abc}>
            <Text style={{color: 'blue', fontWeight: '700'}}>Machines:</Text>
            * {machine}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
const mapStateToProps = state => ({
  ListDetailItem: state.dataReducer.ListDetailItem,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(DetailItem);
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
    width: ms(80),
    height: ms(80),
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
  nameP: {
    fontWeight: 'bold',
    fontSize: ms(20),
    color: 'tomato',
  },
});
