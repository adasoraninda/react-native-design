import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import HorizontalScreen from './src/screens/HorizontalScreen';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Horizontal" component={HorizontalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
