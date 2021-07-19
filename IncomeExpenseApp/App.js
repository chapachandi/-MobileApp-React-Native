import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Income from './component/Income';
import Expense from './component/Expense';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


export default class App extends Component {
 

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Income" component={Income} />
        <Stack.Screen name="Expense" component={Expense} />

        </Stack.Navigator>

      </NavigationContainer>

      
      
   
    )
  }
}


