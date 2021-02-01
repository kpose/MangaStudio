import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 10,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'red',
    height: 250,
    width: 150,
    borderRadius: 20,
    margin: 5,
    marginRight: 10,

    shadowColor: COLORS.DARK_GRAY,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
