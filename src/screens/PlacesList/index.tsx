import React, {Component, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import {ListItem, Text} from 'react-native-elements';
import {places} from '../Utils';

//Components
// import styles from "./styles";

const starImageFilled =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
// Empty Star. You can also give the path from local
const starImageCorner =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

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
    <View style={{flex: 1, padding: 5, backgroundColor: '#e0ebeb'}}>
      {places.results.map((item: any, index: number) => {
        return (
          <View key={index} style={{backgroundColor: 'white', padding: 10, margin: 10}}>
            
            <View style={{ flexDirection: 'row'}}> 
                <View style={{width: 60, height: 60, alignItems: 'center', justifyContent: 'center',padding: 10,borderWidth:1, borderRadius: 40, marginRight: 10}}> 
                    <Image source={{uri: item.icon}}
                    style={{width:40, height:40,resizeMode:'contain'}}/>
                </View>
                <View>
                    <Text style= {{ color: 'black', fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
                    <Text style={{fontSize: 12, marginTop: 6}}>Rating</Text>
                    <CustomRatingBar value={item.rating} />
                </View>
            </View>
            <Text>Address : {item.vicinity}</Text>
            {!!item.business_status ? <Text style={{ color: '#0000b3', fontWeight: 'bold'}}>Open Now</Text> : <Text style={{ color: '#cc0000', fontWeight: 'bold'}}>Closed</Text>}
          </View>
        );
      })}
    </View>
  );
};
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    // justifyContent: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#575757',
    marginLeft: 20,
    marginTop: 10,
  },
  mapView: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantList: {
    flex: 1,
    justifyContent: 'center',
  },
  chevron: {
    color: '#e90000',
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startReviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  customRatingBarStyle: {
    // justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 2
  },
  starImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
});

export default PlaceList;
