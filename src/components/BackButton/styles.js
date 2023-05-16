import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors} from '@config';

export default StyleSheet.create({
  touch: {
    backgroundColor: Colors.dark2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: ww(0.16),
    height: ww(0.16),
    borderRadius: ww(0.08),
    paddingVertical: wh(0.015),
    alignSelf: 'flex-start',
  },
});
