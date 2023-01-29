import React from "react";
import {Text, View,StyleSheet,FlatList,Image,Button,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



 export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
    <Text style={{marginBottom:20}}>Fruit App</Text>
        <View style={{width:200, height:200}}>
        <Button 
        title="Fruits"
        onPress={() => navigation.navigate("Fruits")} />
        </View>
  </View>
    );
           
}
