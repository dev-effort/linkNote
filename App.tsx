/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/Home';
import {StoreContext, store} from './src/store/RootStore';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StoreContext.Provider value={store}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </StoreContext.Provider>
    </NavigationContainer>
  );
};

export default App;
