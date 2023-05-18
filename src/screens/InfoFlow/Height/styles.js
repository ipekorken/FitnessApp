import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
    justifyContent: 'space-between',
    paddingHorizontal: ww(0.08),
    paddingVertical: wh(0.08),
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
  },
  heightContainer: {
    height: wh(0.5),
    width: ww(0.45),
    alignSelf: 'center',
  },
  farHeightTxt: {
    fontFamily: OpenSans.regular,
    fontSize: ww(0.06),
    color: Colors.white,
    opacity: 0.5,
  },
  heightTxt: {
    fontFamily: OpenSans.regular,
    fontSize: ww(0.09),
    color: Colors.white,
    opacity: 0.8,
  },
  selectedHeightTxt: {
    fontFamily: OpenSans.medium,
    fontSize: ww(0.12),
    color: Colors.white,
  },
  selectedHeightView: {
    flexDirection: 'row',
  },
  cmTxt: {
    fontFamily: OpenSans.regular,
    fontSize: ww(0.05),
    color: Colors.white,
    height: wh(0.05),
    alignSelf: 'flex-end',
    marginLeft: ww(0.02),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
