import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
    justifyContent: 'space-between',
    paddingHorizontal: ww(0.08),
    paddingTop: wh(0.08),
    paddingBottom: wh(0.05),
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
  levelContainer: {
    height: wh(0.5),
    width: ww(0.75),
    alignSelf: 'center',
  },
  farLevelTxt: {
    fontFamily: OpenSans.regular,
    fontSize: ww(0.06),
    color: Colors.white,
    opacity: 0.5,
  },
  levelTxt: {
    fontFamily: OpenSans.regular,
    fontSize: ww(0.08),
    color: Colors.white,
    opacity: 0.8,
  },
  selectedLevelTxt: {
    fontFamily: OpenSans.medium,
    fontSize: ww(0.085),
    color: Colors.white,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
