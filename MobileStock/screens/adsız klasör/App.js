import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/NotificationScreen';
import ChangeProfileScreen from './screens/ChangeProfile';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Ana Sayfa',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'Portfölye',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark-plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Bildirim',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
