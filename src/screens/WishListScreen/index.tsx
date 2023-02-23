import React from 'react';
import {Text, View} from 'react-native';
import PlaceList from '../PlacesList';
import styles from './styles';

const WishListScreen = () => {
  return (
    <View
      style={styles.container}>
      <PlaceList />
    </View>
  );
};
export default WishListScreen;
