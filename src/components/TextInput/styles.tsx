import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  input: {
    height: 70,
    width: 340,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.DARK_GRAY,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export default styles;
