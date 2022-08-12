import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useSelector } from "react-redux";
import HomeScreen from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Platform } from 'react-native';
import MyListScreen from './MyListScreen';
import { color } from '../utils/color';
const Tab = createMaterialBottomTabNavigator();

export default function MainScreenContainer({ navigation }) {
  const HomeStack = createStackNavigator();
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#fff"
      inactiveColor="#95a5a6"
      barStyle={{ backgroundColor: color.backgroundCol, paddingBottom : Platform.isPad ? 10 : 0 }}>
     
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () =>
            <Image source={require('../assets/ic_home.png')} />
        }}
      />
      <Tab.Screen
        name="My List"
        component={MyListScreen}
        options={{
          tabBarIcon: () =>
            <Image source={require('../assets/ic_list.png')} />
        }}
      />
    </Tab.Navigator>

  );
}