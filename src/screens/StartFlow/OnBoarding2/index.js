import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';

const OnBoarding2 = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding3');
    }, 2000);
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>CREATE A WORK PLAN,</Text>
          <Text style={styles.boldTitle}>TO STAY FIT</Text>
        </View>
        <Image style={styles.img} source={appImages.onBoardingImg2} />
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <View style={styles.selectedLine}></View>
          <View style={styles.line}></View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding2;
