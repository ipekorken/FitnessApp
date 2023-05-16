import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';

const OnBoarding1 = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding2');
    }, 2000);
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <Image source={appImages.onBoardingImg1} />
      <View style={styles.lineContainer}>
        <View style={styles.selectedLine}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </View>
    </View>
  );
};

export default OnBoarding1;
