import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/NotificationScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PopUp from './screens/Pop-up';

const firebaseConfig = {
	apiKey: 'your-api-key',
	authDomain: 'your-auth-domain',
	databaseURL: 'your-database-url',
	projectId: 'your-project-id',
	storageBucket: 'your-storage-bucket',
	messagingSenderId: 'your-messaging-sender-id',
	appId: 'your-app-id',
};

const Tab = createBottomTabNavigator();

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
					tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />),
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="PortfolioScreen"
				component={PortfolioScreen}
				options={{
					tabBarLabel: 'Portföy',
					tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="bookmark-plus" color={color} size={26} />),
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="NotificationScreen"
				component={NotificationScreen}
				options={{
					tabBarLabel: 'Bildirim',
					tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="bell" color={color} size={26} />),
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Profil',
					tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />),
					headerShown: false
				}}
			/>
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="MyTabs"
					component={MyTabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="EditProfileScreen"
					component={EditProfileScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
