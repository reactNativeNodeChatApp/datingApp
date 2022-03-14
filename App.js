import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Auth from './screens/auth'
import Main from './screens/Main'
import {  createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
const AppNavigator = createStackNavigator({
  Main: {
    screen: Main
  },
  auth: {
    screen: Auth
  }
},{initialRouteName: 'auth'});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
 <AppContainer />
  );
}


