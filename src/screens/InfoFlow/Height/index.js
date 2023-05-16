import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ww, wh, Colors} from '@config';
import {NextButton, BackButton} from '@components';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const Height = ({navigation, route}) => {
  const {gender, age, weight} = route.params;
  const [height, setHeight] = useState(167);
  const [heightIndex, setHeightIndex] = useState(166);
  const [heightData, setHeightData] = useState([]);

  useEffect(() => {
    createHeightData();
  }, []);

  function createHeightData() {
    const arr = Array.from(
      {
        length: 300,
      },
      (v, k) => k + 1,
    );
    setHeightData(arr);
  }

  function handleNext() {
    navigation.navigate('Goal', {
      gender: gender,
      age: age,
      weight: weight,
      height: height,
    });
  }

  function handleBack() {
    navigation.pop();
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>WHAT'S YOUR HEIGHT?</Text>
        <View style={styles.titleView}>
          <Text style={styles.subTitle}>
            THIS HELPS US CREATE YOUR PERSONALIZED PLAN
          </Text>
        </View>
      </View>
      <View style={styles.heightContainer}>
        <ScrollPicker
          dataSource={heightData}
          selectedIndex={heightIndex}
          renderItem={(item, index) => {
            return (
              <View style={styles.selectedHeightView}>
                <Text
                  style={
                    index == heightIndex
                      ? styles.selectedHeightTxt
                      : index == heightIndex - 1 || index == heightIndex + 1
                      ? styles.heightTxt
                      : styles.farHeightTxt
                  }>
                  {item}
                </Text>
                {index == heightIndex && <Text style={styles.cmTxt}>cm</Text>}
              </View>
            );
          }}
          onValueChange={(item, selectedIndex) => {
            setHeight(item);
            setHeightIndex(selectedIndex);
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

export default Height;
