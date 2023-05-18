import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';
import {setHideBoardings} from '@redux';
import {useDispatch} from 'react-redux';
import {NextIcon} from '@assets';

const OnBoarding3 = () => {
  const dispatch = useDispatch();

  function finishBoardings() {
    dispatch(setHideBoardings(true));
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>ACTION IS THE,</Text>
          <Text style={styles.boldTitle}>KEY TO ALL SUCCESS</Text>
        </View>
        <Image style={styles.img} source={appImages.onBoardingImg3} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.touch}
          onPress={finishBoardings}>
          <Text style={styles.txt}>Start Now</Text>
          <NextIcon />
        </TouchableOpacity>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
          <View style={styles.selectedLine}></View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding3;
