import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WARNING,
    padding: 10,
    height: 60,
    width: 300,
    borderRadius: 20,
  },
  title: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default styles;
