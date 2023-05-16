import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ww, wh, Colors} from '@config';
import {NextButton} from '@components';
import {FemaleIcon, MaleIcon} from '@assets';
import {BackButton} from '../../../components';

const Weight = ({navigation, route}) => {
  const {gender, age} = route.params;
  const [weight, setWeight] = useState('54');

  function handleNext() {
    navigation.navigate('Height', {
      gender: gender,
      age: age,
      weight: weight,
    });
  }

  function handleBack() {
    navigation.pop();
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>WHAT'S YOUR WEIGHT?</Text>
        <View style={styles.titleView}>
          <Text style={styles.subTitle}>YOU CAN ALWAYS CHANGE THIS LATER</Text>
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

export default Weight;
