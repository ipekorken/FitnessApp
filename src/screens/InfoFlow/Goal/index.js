import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ww, wh, Colors} from '@config';
import {NextButton, BackButton} from '@components';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const Goal = ({navigation, route}) => {
  const {gender, age, weight, height} = route.params;
  const [goal, setGoal] = useState('Get fitter');
  const [goalIndex, setGoalIndex] = useState(2);
  const [goalData, setGoalData] = useState([
    'Gain Weight',
    'Lose Weight',
    'Get Fitter',
    'Gain More Flexible',
    'Learn The Basic',
  ]);

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
      <View style={styles.goalContainer}>
        <ScrollPicker
          dataSource={goalData}
          selectedIndex={goalIndex}
          renderItem={(item, index) => {
            return (
              <Text
                style={
                  index == goalIndex
                    ? styles.selectedGoalTxt
                    : index == goalIndex - 1 || index == goalIndex + 1
                    ? styles.goalTxt
                    : styles.farGoalTxt
                }>
                {item}
              </Text>
            );
          }}
          onValueChange={(item, selectedIndex) => {
            setGoal(item);
            setGoalIndex(selectedIndex);
          }}
          wrapperColor={Colors.dark1}
          itemHeight={wh(0.1)}
          highlightColor={Colors.primary}
          highlightBorderWidth={4}
        />
      </View>
      <View style={styles.bottomContainer}>
        <BackButton onPress={handleBack} />
        <NextButton btnTitle={'Next'} onPress={handleNext} />
      </View>
    </View>
  );
};

export default Goal;
