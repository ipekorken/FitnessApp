import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ww, wh, Colors} from '@config';
import {NextButton, BackButton} from '@components';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const Level = ({navigation, route}) => {
  const {gender, age, weight, height, goal} = route.params;
  const [level, setLevel] = useState('Intermediate');
  const [levelIndex, setLevelIndex] = useState(2);
  const [levelData, setLevelData] = useState([
    'Rookie',
    'Beginner',
    'Intermediate',
    'Advance',
    'True Beast',
  ]);

  function handleNext() {
    const InfoFlowData = {
      gender: gender,
      age: age,
      weight: weight,
      height: height,
      goal: goal,
      level: level,
    };
    console.log('InfoFlowData: ', InfoFlowData);
  }

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
      <View style={styles.levelContainer}>
        <ScrollPicker
          dataSource={levelData}
          selectedIndex={levelIndex}
          renderItem={(item, index) => {
            return (
              <Text
                style={
                  index == levelIndex
                    ? styles.selectedLevelTxt
                    : index == levelIndex - 1 || index == levelIndex + 1
                    ? styles.levelTxt
                    : styles.farLevelTxt
                }>
                {item}
              </Text>
            );
          }}
          onValueChange={(item, selectedIndex) => {
            setLevel(item);
            setLevelIndex(selectedIndex);
          }}
          wrapperColor={Colors.dark1}
          itemHeight={wh(0.1)}
          highlightColor={Colors.primary}
          highlightBorderWidth={4}
        />
      </View>
      <View style={styles.bottomContainer}>
        <BackButton onPress={handleBack} />
        <NextButton btnTitle={'Start'} onPress={handleNext} />
      </View>
    </View>
  );
};

export default Level;
