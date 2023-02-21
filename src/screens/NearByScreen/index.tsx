import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {View, StyleSheet, Text} from 'react-native';
import { API_KEY } from '../Utils';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = ({navigation}) => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    Geolocation.getCurrentPosition(i => {
      setLat(i?.coords?.latitude);
      setLong(i?.coords?.longitude);
    });
    console.log('lat ---', lat);
    console.log('long ---', long);
  }, []);

  useEffect(() => {
    console.log('Placae UEF called');
    // getPlaces();
  }, [lat, long]);

  /**
   * Get the Place URL
   */
  const getPlacesUrl = (lat, long, radius, type, apiKey) => {
    const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const api = `&key=${apiKey}`;
    return `${baseUrl}${location}${typeData}${api}`;
  };

  const getPlaces = () => {
    const url = getPlacesUrl(lat, long, 1500, 'restaurant', API_KEY);
    console.log('URL', url);
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => console.log('res----', res.JSON()))
      .then(res => {
        const markers = res.results.map((element, index) => {
          const marketObj = {
            id: element.id,
            name: element.name,
            photos: element.photos,
            rating: element.rating,
            vicinity: element.vicinity,
            marker: {
              latitude: element.geometry.location.lat,
              longitude: element.geometry.location.lng,
            },
          };
          console.log('Marked OBJ -----> ', marketObj);
          return marketObj;
        });
        setPlaces(markers);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
      <Text>
        Current position: {lat} , {long}
      </Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mapView: {
    flex: 1,
    justifyContent: 'center',
    height: '50%',
    width: '100%',
  },
  placeList: {
    flex: 1,
    justifyContent: 'center',
  },
});
