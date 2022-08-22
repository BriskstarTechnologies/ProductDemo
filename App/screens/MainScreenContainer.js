import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from './HomeScreen';
import { Image, Platform } from 'react-native';
import MyListScreen from './MyListScreen';
import { color } from '../utils/color';
import { useSelector } from 'react-redux';
import CartViewScreen from './CartViewScreen';
const Tab = createMaterialBottomTabNavigator();



//Note : In this screen we declared Tab Navigation View(Bottom Tab) for the redirection screen.
export default function MainScreenContainer({ navigation }) {
  const data = useSelector((state) => state);
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#fff"
      inactiveColor="#95a5a6"
      barStyle={{ backgroundColor: color.backgroundCol, paddingBottom: Platform.isPad ? 10 : 0 }}>

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
      <Tab.Screen
        name="My Cart"
        component={CartViewScreen}
        options={{
          tabBarIcon: () =>
            <Image
              style={{ width: 28, height: 28, tintColor: color.colorWhite }}
              source={require('../assets/ic_cart1.png')} />,
          tabBarBadge: data.cartReducer.cartData.length,
          tabBarBadgeStyle: {
            maxWidth: 30,
            maxHeight: 30,
            fontSize: 30,
            lineHeight: 9,
            alignSelf: undefined,
          },

        }}
      />
    </Tab.Navigator>

  );
}