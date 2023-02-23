import React, {Component, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Text} from 'react-native-elements';
import {places} from '../Utils';
import styles from './styles';
import { starImageCorner,starImageFilled } from '../Utils';

interface PlaceListProps {
  places: { results: any[] };
}

const PlaceList: React.FC<PlaceListProps> = ({ places : any }) => {
  const [defaultRating, setDefaultRating] = useState<number>(1);
  const [maxRating, setMaxRating] = useState<number[]>([1, 2, 3, 4, 5]);

  const CustomRatingBar: React.FC<{value: number}> = ({ value }) => {
    return (
      <View style={styles.customRatingBarStyle}>
        
        {maxRating.map((item, key) => {
          return (
            <View key={key}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= value
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.mainList}>
      {places.results.map((item: any, index: number) => {
        return (
          <View key={index} style={styles.listItem}>
            
            <View style={{ flexDirection: 'row'}}> 
                <View style={styles.itemImage}> 
                    <Image source={{uri: item.icon}}
                    style={styles.imageStyle}/>
                </View>
                <View>
                    <Text style= {styles.itemNameStyle}>{item.name}</Text>
                    <Text style={styles.ratingStyle}>Rating</Text>
                    <CustomRatingBar value={item.rating} />
                </View>
            </View>
            <Text>Address : {item.vicinity}</Text>
            {!!item.business_status ? <Text style={styles.openNowText}>Open Now</Text> : <Text style={styles.closedText}>Closed</Text>}
          </View>
        );
      })}
    </View>
  );
};

export default PlaceList;
