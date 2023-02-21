import React from 'react';
import {Text, View} from 'react-native';
import PlaceList from '../PlacesList';

const WishListScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <PlaceList />
    </View>
  );
};
export default WishListScreen;
