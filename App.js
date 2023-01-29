import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PostFruit from "./src/containers/PostFruits"
import HomeStack from "./src/navigations/HomeStack";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

 export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
            if (route.name === 'Home') {
              iconName = focused ? "fruit-cherries-off" : 'fruit-cherries';
            }if (route.name === 'Post Fruits') {
              iconName = focused ? 'plussquare' : 'plussquareo';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })} initialRouteName="HomeStack">
           <Stack.Screen  name="Home" component={HomeStack} />
          <Tab.Screen name="Post Fruits" component={PostFruit} />
        </Tab.Navigator>
      </NavigationContainer>
    );
    
}

