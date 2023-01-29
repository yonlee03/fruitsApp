import React, { useState }from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text,Button,TextInput,SafeAreaView,FlatList, StyleSheet,StatusBar } from 'react-native';
import Fruits from '../containers/Fruits';
import Home  from '../containers/Home';
const Stack = createNativeStackNavigator();


export default function HomeStack() {
    return (
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{title: "Casita", headerTitleAlign: 'center'}} />
      <Stack.Screen  name="Fruits" component={Fruits} options={{ headerTitleAlign: 'center'}}/>
    </Stack.Navigator>
    );
  }