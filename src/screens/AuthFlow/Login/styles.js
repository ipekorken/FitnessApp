import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF, OpenSans} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
    justifyContent: 'space-between',
  },
  loginImg: {
    position: 'absolute',
    width: ww(1),
  },
  welcomeView: {
    marginTop: wh(0.15),
  },
  welcome: {
    fontFamily: IntegralCF.regular,
    fontSize: ww(0.12),
    color: Colors.white,
  },
  container: {
    paddingHorizontal: ww(0.08),
    paddingTop: wh(0.08),
    paddingBottom: wh(0.05),
    flex: 1,
    justifyContent: 'space-between',
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
  forgotTouch: {
    marginTop: wh(0.035),
  },
  forgotTxt: {
    fontFamily: OpenSans.medium,
    color: Colors.primary,
    fontSize: ww(0.04),
    alignSelf: 'flex-end',
    marginRight: ww(0.025),
  },
  bottomContainer: {
    marginTop: wh(0.035),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
