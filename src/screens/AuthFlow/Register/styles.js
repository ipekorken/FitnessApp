import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
    justifyContent: 'space-between',
  },
  signUpImg: {
    position: 'absolute',
    width: ww(1),
  },
  helloView: {
    marginTop: wh(0.1),
  },
  hello: {
    fontFamily: IntegralCF.regular,
    fontSize: ww(0.12),
    color: Colors.white,
  },
  subHello: {
    fontFamily: IntegralCF.regular,
    fontSize: ww(0.035),
    color: Colors.white,
  },
  container: {
    paddingHorizontal: ww(0.08),
    paddingVertical: wh(0.08),
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: wh(0.05),
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
  forgotTouch: {},
  forgotTxt: {
    fontFamily: OpenSans.medium,
    color: Colors.primary,
    fontSize: ww(0.04),
    alignSelf: 'flex-end',
    marginRight: ww(0.025),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
