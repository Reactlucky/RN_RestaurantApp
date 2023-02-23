import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {View, StyleSheet, Text, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {API_KEY, requestLocationPermission} from '../Utils';
import styles from './styles';
interface MarkerObj {
  id: string;
  name: string;
  photos: string[];
  rating: number;
  vicinity: string;
  marker: {
    latitude: number;
    longitude: number;
  };
}

const MapScreen: React.FC = ({navigation}) => {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [places, setPlaces] = useState<MarkerObj[]>([]);



  useEffect(() => {
    Geolocation.getCurrentPosition(i => {
      setLat(i?.coords?.latitude);
      setLong(i?.coords?.longitude);
    });
    console.log('lat ---', lat);
    console.log('long ---', long);
  }, []);

  useEffect(() => {
    console.log('Place UEF called');
    getPlaces();
    requestLocationPermission();
  }, [lat, long]);

  /**
   * Get the Place URL
   */
  const getPlacesUrl = (
    lat: number,
    long: number,
    radius: number,
    type: string,
    apiKey: string,
  ) => {
    const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const api = `&key=${apiKey}`;
    return `${baseUrl}${location}${typeData}${api}`;
  };

  const getPlaces = () => {
    const url = getPlacesUrl(lat!, long!, 1500, 'restaurant', API_KEY);
    console.log('URL', url);
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => console.log('res----', res.JSON()))
      .then(res => {
        const markers = res.results.map((element: any, index: number) => {
          const marketObj: MarkerObj = {
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
      <Text style={styles.textStyle}>Map Screen</Text>
      <Text style={styles.textStyle}>
        Current position: {lat} , {long}
      </Text>
    </View>
  );
};

export default MapScreen;
