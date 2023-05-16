import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  touch: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: ww(0.32),
    borderRadius: ww(0.1),
    paddingVertical: wh(0.015),
    alignSelf: 'flex-end',
  },
  txt: {
    color: Colors.black,
    paddingHorizontal: ww(0.02),
    fontSize: ww(0.045),
    fontFamily: OpenSans.medium,
  },
});
