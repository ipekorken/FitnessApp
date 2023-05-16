import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ww, wh, Colors} from '@config';
import {NextButton, BackButton} from '@components';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const Age = ({navigation, route}) => {
  const {gender} = route.params;
  const [age, setAge] = useState(35);
  const [ageIndex, setAgeIndex] = useState(34);
  const [ageData, setAgeData] = useState([]);

  useEffect(() => {
    createAgeData();
  }, []);

  function createAgeData() {
    const arr = Array.from(
      {
        length: 100,
      },
      (v, k) => k + 1,
    );
    setAgeData(arr);
  }

  function handleNext() {
    navigation.navigate('Weight', {
      gender: gender,
      age: age,
    });
  }

  function handleBack() {
    navigation.pop();
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>HOW OLD ARE YOU?</Text>
        <View style={styles.titleView}>
          <Text style={styles.subTitle}>
            THIS HELPS US CREATE YOUR PERSONALIZED PLAN
          </Text>
        </View>
      </View>
      <View style={styles.ageContainer}>
        <ScrollPicker
          dataSource={ageData}
          selectedIndex={ageIndex}
          renderItem={(item, index) => {
            return (
              <Text
                style={
                  index == ageIndex
                    ? styles.selectedAgeTxt
                    : index == ageIndex - 1 || index == ageIndex + 1
                    ? styles.ageTxt
                    : styles.farAgeTxt
                }>
                {item}
              </Text>
            );
          }}
          onValueChange={(item, selectedIndex) => {
            setAge(item);
            setAgeIndex(selectedIndex);
          }}
          wrapperColor={Colors.dark1}
          itemHeight={wh(0.1)}
          highlightColor={Colors.primary}
          highlightBorderWidth={2}
        />
      </View>
      <View style={styles.bottomContainer}>
        <BackButton onPress={handleBack} />
        <NextButton btnTitle={'Next'} onPress={handleNext} />
      </View>
    </View>
  );
};

export default Age;
