import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ww, wh, Colors} from '@config';
import {NextButton} from '@components';
import {FemaleIcon, MaleIcon} from '@assets';
import {BackButton} from '../../../components';

const Goal = ({navigation, route}) => {
  const {gender, age, weight, height} = route.params;
  const [goal, setGoal] = useState('Get fitter');

  function handleNext() {
    navigation.navigate('Level', {
      gender: gender,
      age: age,
      weight: weight,
      height: height,
      goal: goal,
    });
  }

  function handleBack() {
    navigation.pop();
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>WHAT'S YOUR GOAL?</Text>
        <View style={styles.titleView}>
          <Text style={styles.subTitle}>
            THIS HELPS US CREATE YOUR PERSONALIZED PLAN
          </Text>
        </View>
      </View>
      <View style={styles.ageContainer}></View>
      <View style={styles.bottomContainer}>
        <BackButton onPress={handleBack} />
        <NextButton btnTitle={'Next'} onPress={handleNext} />
      </View>
    </View>
  );
};

export default Goal;
