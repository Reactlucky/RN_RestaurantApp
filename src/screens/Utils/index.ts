import {PermissionsAndroid} from 'react-native';

export const starImageFilled =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
// Empty Star. You can also give the path from local
export const starImageCorner =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

export const API_KEY = 'AIzaSyCtMhvrnUFsq0YcdqYiKtZrYt6bMrttDoE';

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Restaurant App',
        message: 'NearBy Restaurant App access to your location ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      alert('You can use the location');
    } else {
      console.log('location permission denied');
      alert('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

export const places = {
  html_attributions: [],
  results: [
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 27.3888459,
          lng: 78.6064409,
        },
        viewport: {
          northeast: {
            lat: 27.39015493029151,
            lng: 78.6077165302915,
          },
          southwest: {
            lat: 27.3874569697085,
            lng: 78.60501856970849,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
      name: 'Kallu Daba Eka',
      place_id: 'ChIJtW1wuBtVdDkRZ1zzxAeTJ4w',
      rating: 5,
      reference: 'ChIJtW1wuBtVdDkRZ1zzxAeTJ4w',
      scope: 'GOOGLE',
      types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
      user_ratings_total: 1,
      vicinity: '9JQ4+GHP, Eka',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 27.3887733,
          lng: 78.6063509,
        },
        viewport: {
          northeast: {
            lat: 27.3901143302915,
            lng: 78.60768523029149,
          },
          southwest: {
            lat: 27.3874163697085,
            lng: 78.60498726970849,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
      name: 'Main Chauraha Eka Firozabad',
      place_id: 'ChIJEzsy2pZVdDkRppI2-wcfCEg',
      rating: 5,
      reference: 'ChIJEzsy2pZVdDkRppI2-wcfCEg',
      scope: 'GOOGLE',
      types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
      user_ratings_total: 3,
      vicinity: '9JQ4+GG5, Unnamed Road, Eka',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 27.38877519999999,
          lng: 78.606357,
        },
        viewport: {
          northeast: {
            lat: 27.3901132302915,
            lng: 78.6076859302915,
          },
          southwest: {
            lat: 27.3874152697085,
            lng: 78.60498796970849,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
      name: 'Kalki Daba Eka Firozabad',
      photos: [
        {
          height: 960,
          html_attributions: [
            '\u003ca href="https://maps.google.com/maps/contrib/104902287119144860340"\u003eBrajesh Rajput eka\u003c/a\u003e',
          ],
          photo_reference:
            'AfLeUgOhQaHmTXqiHVihhjFoXEklLi77_xRQy8vrUPwM0kax3oD0-SIJDsgEynO5ydthBDuhMvUclYyqxw8zexFDscgBeYJTANvm_wPo3zti_M6Us3lbP9ElIMv8s0EmqSL1IE0uOmcQVM57COiKzV66YaN-bJiiDM1QepUZkHI3dOFVXku7',
          width: 720,
        },
      ],
      place_id: 'ChIJf9o-rvFVdDkRA06l055ZzxI',
      rating: 3.7,
      reference: 'ChIJf9o-rvFVdDkRA06l055ZzxI',
      scope: 'GOOGLE',
      types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
      user_ratings_total: 3,
      vicinity: '9JQ4+GG9, Etah Road, Eka',
    },
  ],
  status: 'OK',
};
