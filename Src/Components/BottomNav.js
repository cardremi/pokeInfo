import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../Features/Main';
import Pokemon from '../Features/Pokemon';
import ItemPoke from '../Features/ItemPoke';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ms} from 'react-native-size-matters';
const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        tabStyle: {
          borderColor: 'black',
          borderWidth: 1
        },
        labelStyle: {
          fontSize: ms(16),
        },
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Foundation name="home" color="black" size={ms(30)} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          tabBarLabel: 'Pokemon',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="pokemon-go"
              color="black"
              size={ms(30)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ItemPoke"
        component={ItemPoke}
        options={{
          tabBarLabel: 'Item',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="sword" color="black" size={ms(30)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
