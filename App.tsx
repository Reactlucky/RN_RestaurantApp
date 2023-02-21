import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WishListScreen from './src/screens/WishListScreen';
import NearByScreen from './src/screens/NearByScreen';
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{title: 'Nearby Restaurants', headerTitleAlign: 'center' ,tabBarLabel: 'NearBy',
           tabBarIcon:()=>(  
            <Icon name="location-outline" type='ionicons' color='blue' size={25}/>  
        )  }}
          name="NearByScreen"
          component={NearByScreen}
        />

        <Tab.Screen
          options={{title: 'Nearby Restaurants', headerTitleAlign: 'center' ,tabBarLabel: 'WishList'}}
          name="WishListScreen"
          component={WishListScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
