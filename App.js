import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
