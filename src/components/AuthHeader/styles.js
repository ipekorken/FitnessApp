import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touch: {},
  txt: {
    fontFamily: OpenSans.medium,
    fontSize: ww(0.045),
    color: Colors.white,
  },
});
