import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishListScreen from './src/screens/WishListScreen';
import NearByScreen from './src/screens/NearByScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
     >
        <Tab.Screen options={
          headerTitle="ss"
        } name="NearByScreen" component={NearByScreen} />

        <Tab.Screen name="WishListScreen" component={WishListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}