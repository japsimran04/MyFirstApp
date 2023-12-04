/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import UsElection from './components/UsElection';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="UsElection" component={UsElection} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
};

export default App;