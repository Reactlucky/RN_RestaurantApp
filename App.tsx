import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WishListScreen from './src/screens/WishListScreen';
import NearByScreen from './src/screens/NearByScreen';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            title: 'Nearby Restaurants',
            headerTitleAlign: 'center',
            tabBarLabel: 'NearBy',
            tabBarIcon: () => (
              <Icon name="location" type="evilicon" color="#517fa4" />
            ),
          }}
          name="NearByScreen"
          component={NearByScreen}
        />

        <Tab.Screen
          options={{
            title: 'Nearby Restaurants',
            headerTitleAlign: 'center',
            tabBarLabel: 'WishList',
            tabBarIcon: () => (
              <Icon name="heart" type="evilicon" color="#517fa4" />
            ),
          }}
          name="WishListScreen"
          component={WishListScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
