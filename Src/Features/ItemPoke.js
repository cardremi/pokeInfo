import React,{useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import WeaponCard from '../Components/WeaponCard';
import {getItem, actionDetailItem} from '../Components/Action';
import {ms} from 'react-native-size-matters';
import Spinner from 'react-native-loading-spinner-overlay';
function ItemPoke(props) {
  useEffect(() => {
    props.getItem();
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
  const detailItem = data => {
    props.actionDetailItem(data);
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
      <Text style={styles.text}>Item Data</Text>
      <FlatList
        data={props.ListItem}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={ItemSeparatorView}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          let weapon = item.name;
          let upperWeapon = weapon.toUpperCase();
          return (
            <WeaponCard
              name={upperWeapon}
              onPress={() => detailItem(item.name)}
            />
          );
        }}
      />
    </View>
  );
}
const mapStateToProps = state => ({
  ListItem: state.dataReducer.ListItem,
  isLoading: state.dataReducer.isLoading,
});

const mapDispatchToProps = {
  getItem,
  actionDetailItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemPoke);

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
