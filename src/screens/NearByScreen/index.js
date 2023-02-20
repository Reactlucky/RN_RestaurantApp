import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View,StyleSheet } from "react-native";
// import { GOOGLE_API_KEY } from "react-native-dotenv";



const MapScreen = ({ navigation }) => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [placeType, setPlaceType] = useState("restaurant");

  //Set the HeaderTitle screen
  useEffect(() => {
    const placeName = navigation.getParam("placeName");
    navigation.setParams({ headerTitle: placeName.toUpperCase() });
  }, []);

  useEffect(() => {
    const placeType = navigation.getParam("placeType");
    setPlaceType(placeType);
    getCurrentLocation();
  }, []);

  /**
   * Get current user's position
   */
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      setLat(lat);
      setLong(long);
      getPlaces();
    });
  }

  /**
   * Get the Place URL
   */
  const getPlacesUrl = (lat, long, radius, type, apiKey) => {
    const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const api = `&key=${apiKey}`;
    return `${baseUrl}${location}${typeData}${api}`;
  }

  const getPlaces = () => {
    const url = getPlacesUrl(lat, long, 1500, placeType, GOOGLE_API_KEY);
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
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
              longitude: element.geometry.location.lng
            }
          };
          return marketObj;
        });
        setPlaces(markers);
        setIsLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        <MapView
          style={{
            flex: 1
          }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {places.map((marker, i) => (
            <MapView.Marker
              key={i}
              coordinate={{
                latitude: marker.marker.latitude,
                longitude: marker.marker.longitude
              }}
              title={marker.name}
            />
          ))}
        </MapView>
      </View>
      <View style={styles.placeList}>
        {/* <PlaceList places={places} /> */}
      </View>
    </View>
  );
};

export default MapScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  mapView: {
    flex: 1,
    justifyContent: "center",
    height: "50%",
    width: "100%"
  },
  placeList: {
    flex: 1,
    justifyContent: "center"
  }
});
