import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ww, wh, Colors} from '@config';
import {NextButton, BackButton} from '@components';

const Level = ({navigation, route}) => {
  const {gender, age, weight, height, goal} = route.params;
  const [level, setLevel] = useState('Intermediate');

  function handleNext() {}

  function handleBack() {
    navigation.pop();
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>YOUR REGULAR PHYSICAL</Text>
        <Text style={styles.mainTitle}>ACTIVITY LEVEL?</Text>
        <View style={styles.titleView}>
          <Text style={styles.subTitle}>
            THIS HELPS US CREATE YOUR PERSONALIZED PLAN
          </Text>
        </View>
      </View>
      <View style={styles.ageContainer}></View>
      <View style={styles.bottomContainer}>
        <BackButton onPress={handleBack} />
        <NextButton btnTitle={'Start'} onPress={handleNext} />
      </View>
    </View>
  );
};

export default Level;
