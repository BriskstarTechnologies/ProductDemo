import React from 'react';
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

export default App;
