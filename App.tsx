import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WishListScreen from './src/screens/WishListScreen';
import NearByScreen from './src/screens/NearByScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{title: 'Nearby Restaurants', headerTitleAlign: 'center'}}
          name="NearByScreen"
          component={NearByScreen}
        />

        <Tab.Screen
          options={{title: 'Nearby Restaurants', headerTitleAlign: 'center'}}
          name="WishListScreen"
          component={WishListScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
