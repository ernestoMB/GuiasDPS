import React from 'react';
import HomeScreen from './HomeScreen'
import { createAppContainer } from 'react-navigation/NavigationTestUtils';
import { StyleSheet, Text , View, Button } from 'react-native'
import WebScreen from './WebScreen';
import { createStackNavigator } from '@react-navigation/stack';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
    },
    Web:{
    screen: WebScreen
    }
    },{ initialRouteName: 'Home'
})
export default createAppContainer (AppNavigator)

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
});