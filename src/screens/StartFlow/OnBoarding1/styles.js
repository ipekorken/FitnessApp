import {Platform, StyleSheet} from 'react-native';
import {ww, wh, Colors, IntegralCF} from '@config';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.dark1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  img: {
    width: ww(1),
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: wh(0.1),
    width: ww(0.3),
  },
  selectedLine: {
    backgroundColor: Colors.primary,
    width: ww(0.1),
    height: wh(0.005),
  },
  line: {
    backgroundColor: Colors.dark2,
    width: ww(0.05),
    height: wh(0.005),
  },
  titleView: {
    position: 'absolute',
    zIndex: 100,
    marginTop: wh(0.5),
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontFamily: IntegralCF.regular,
    fontSize: ww(0.07),
    color: Colors.white,
  },
  boldTitle: {
    fontFamily: IntegralCF.bold,
    fontSize: ww(0.07),
    color: Colors.white,
  },
});
