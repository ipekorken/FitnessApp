import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
    justifyContent: 'space-between',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: wh(0.1),
    width: ww(0.3),
  },
  selectedLine: {
    backgroundColor: Colors.primary,
    width: ww(0.1),
    height: wh(0.005),
  },
  line: {
    backgroundColor: Colors.dark2,
    width: ww(0.05),
    height: wh(0.005),
  },
});
