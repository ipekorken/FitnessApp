import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
    paddingHorizontal: ww(0.08),
    paddingVertical: wh(0.08),
  },
  title: {
    marginTop: wh(0.05),
    color: Colors.white,
    fontSize: ww(0.07),
    fontFamily: IntegralCF.medium,
  },
  subTitle: {
    color: Colors.white,
    fontSize: ww(0.035),
    fontFamily: IntegralCF.medium,
  },
  forgotTouch: {},
  forgotTxt: {
    fontFamily: OpenSans.medium,
    color: Colors.primary,
    fontSize: ww(0.04),
    alignSelf: 'center',
    marginVertical: wh(0.02),
  },
  inputContainer: {
    marginTop: wh(0.1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputView: {
    borderBottomWidth: ww(0.005),
    paddingBottom: wh(0.02),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontFamily: OpenSans.bold,
    color: Colors.white,
    fontSize: ww(0.08),
    width: ww(0.12),
    textAlign: 'center',
  },
  bottomContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  bottomSubContainer: {},
});
