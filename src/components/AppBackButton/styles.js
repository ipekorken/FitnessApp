import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors} from '@config';

export default StyleSheet.create({
  touch: {
    backgroundColor: Colors.dark2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: ww(0.12),
    height: ww(0.12),
    borderRadius: ww(0.06),
    paddingVertical: wh(0.015),
    alignSelf: 'flex-start',
    marginLeft: ww(-0.02),
  },
});
