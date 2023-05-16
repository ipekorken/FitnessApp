import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';

const OnBoarding3 = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <Image source={appImages.onBoardingImg3} />
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.selectedLine}></View>
      </View>
    </View>
  );
};

export default OnBoarding3;
