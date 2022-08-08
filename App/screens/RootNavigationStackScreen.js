import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import MainScreenContainer from './MainScreenContainer';
import ProductDetailScreen from './ProductDetailScreen';


const RootStack = createNativeStackNavigator();

const RootNavigationStackScreen = ({navigation}) => (
  <RootStack.Navigator initialRouteName="SplashScreen">
    <RootStack.Screen
      name="SplashScreen"
      options={{headerShown: false}}
      component={SplashScreen}
    />
    <RootStack.Screen
      name="MainScreenContainer"
      options={{headerShown: false}}
      component={MainScreenContainer}
    />
     <RootStack.Screen
      name="ProductDetailScreen"
      options={{
        headerShown: true,
        headerBackTitle: '',
        headerTitle: 'Details',
        headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
      }}
      component={ProductDetailScreen}
    />
    
  </RootStack.Navigator>
);

export default RootNavigationStackScreen;
