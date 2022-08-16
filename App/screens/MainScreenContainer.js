import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from './HomeScreen';
import { Image, Platform } from 'react-native';
import MyListScreen from './MyListScreen';
import { color } from '../utils/color';
const Tab = createMaterialBottomTabNavigator();

//Note : In this screen we declared Tab Navigation View(Bottom Tab) for the redirection screen.
export default function MainScreenContainer({ navigation }) {
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