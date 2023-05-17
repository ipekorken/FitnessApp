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
  },
  inputView: {
    borderBottomWidth: ww(0.002),
    borderColor: Colors.dark3,
    paddingBottom: wh(0.02),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: OpenSans.regular,
    color: Colors.white,
    fontSize: ww(0.05),
    width: ww(0.75),
  },
  bottomContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  bottomSubContainer: {},
});
