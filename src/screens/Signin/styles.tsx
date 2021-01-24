import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 35,
    color: COLORS.WHITE,
  },
  heading2: {
    fontSize: 30,
    marginTop: 10,
    color: COLORS.SILVER,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  inputStyles: {
    marginTop: 90,
    marginLeft: 30,
  },
  forgotPassword: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
    alignSelf: 'flex-end',
    marginRight: 50,
    color: COLORS.WARNING,
  },
  input: {
    borderColor: COLORS.PRIMARY,
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
  },
  signup: {
    flexDirection: 'row',
    top: 170,
    //bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
