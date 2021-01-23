import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 20,
    color: COLORS.WHITE,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 25,
    lineHeight: 30,
  },
});

export default styles;
