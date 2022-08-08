import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Store from './App/redux/store';
import { Provider } from 'react-redux';
import RootNavigationStackScreen from './App/screens/RootNavigationStackScreen'
import { NavigationContainer } from '@react-navigation/native';

const App =() => {

return (
      <Provider store={Store}>
      <NavigationContainer>
        <RootNavigationStackScreen />
      </NavigationContainer>
      </Provider>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
