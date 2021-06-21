import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailPoke from '../Features/DetailPoke';
import DetailItem from '../Features/DetailItem';
import BottomNav from '../Components/BottomNav'

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        component={BottomNav}
        name="BottomNav"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DetailPoke}
        name="Detail Pokemon"
        options={{headerShown: true}}
      />
      <Stack.Screen
        component={DetailItem}
        name="Detail Item"
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
export default Nav;
