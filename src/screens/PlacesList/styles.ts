import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    // justifyContent: 'center',
  },
  startReviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  customRatingBarStyle: {
    // justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 2,
  },
  starImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
  mainList: {
    flex: 1,
    padding: 5,
    backgroundColor: '#e0ebeb',
  },
  listItem: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#cccccc',
  },
  itemImage: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 40,
    marginRight: 10,
  },
  imageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  itemNameStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ratingStyle: {
    fontSize: 12,
    marginTop: 6,
  },
  openNowText: {
    color: '#0000b3',
    fontWeight: 'bold',
  },
  closedText: {
    color: '#cc0000',
    fontWeight: 'bold',
  },
});
