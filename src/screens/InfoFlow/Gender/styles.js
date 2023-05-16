import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
    justifyContent: 'space-around',
    padding: wh(0.035),
  },
  titleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  mainTitle: {
    color: Colors.white,
    fontFamily: IntegralCF.bold,
    fontSize: ww(0.055),
  },
  titleView: {
    alignItems: 'center',
    marginTop: wh(0.02),
  },
  subTitle: {
    color: Colors.white,
    fontFamily: IntegralCF.regular,
    fontSize: ww(0.03),
    marginBottom: wh(0.005),
  },
  touchContainer: {
    alignItems: 'center',
  },
  genderTouch: {
    width: ww(0.4),
    height: ww(0.4),
    borderRadius: ww(0.2),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wh(0.05),
  },
  genderTxt: {
    marginTop: wh(0.02),
  },
});
