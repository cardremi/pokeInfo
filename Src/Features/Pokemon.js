import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getPokemon, actionDetailPoke} from '../Components/Action';
import PokemonCard from '../Components/PokemonCard';
import {ms} from 'react-native-size-matters';
import Spinner from 'react-native-loading-spinner-overlay';

function Pokemon(props) {
  useEffect(() => {
    props.getPokemon();
  }, []);
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: ms(15),
        }}
      />
    );
  };
  const detailPoke = data => {
    props.actionDetailPoke(data);
    console.log(data, 'nama nyaaaa');
  };
  return (
    <View style={styles.cover}>
      <Spinner
        visible={props.isLoading}
        textContent={'Loading'}
        textStyle={{color: 'black'}}
        size="large"
        color="red"
      />
      <Text style={styles.text}>Pokémon Data</Text>
      <FlatList
        data={props.ListData}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={ItemSeparatorView}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          let poke = item.name;
          let upperPoke = poke.toUpperCase();
          return (
            <PokemonCard
              name={upperPoke}
              onPress={() => detailPoke(item.name)}
            />
          );
        }}
      />
    </View>
  );
}
const mapStateToProps = state => ({
  ListData: state.dataReducer.ListData,
  isLoading: state.dataReducer.isLoading,
});

const mapDispatchToProps = {
  getPokemon,
  actionDetailPoke,
};
export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);

const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#ffde03',
    width: '100%',
    height: '100%',
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    alignContent: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: ms(20),
    alignSelf: 'center',
    paddingBottom: ms(20),
  },
});
