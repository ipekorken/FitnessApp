import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
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
  container: {
    paddingHorizontal: ww(0.08),
    paddingVertical: wh(0.08),
    flex: 1,
    justifyContent: 'space-between',
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
    justifyContent: 'center',
  },
  inputView: {
    borderBottomWidth: ww(0.005),
    borderBottomColor: Colors.primary,
    fontFamily: OpenSans.bold,
    color: Colors.white,
    fontSize: ww(0.08),
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: wh(0.02),
    width: ww(0.1),
    marginHorizontal: ww(0.02),
  },
  input: {},
  containerStyle: {
    backgroundColor: Colors.dark1,
  },
  otpStyle: {},
  bottomContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  bottomSubContainer: {},
});
