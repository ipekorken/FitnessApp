import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';
import {NextButton, BackButton} from '@components';
import {RulerPicker} from 'react-native-ruler-picker';

const Weight = ({navigation, route}) => {
  const {gender, age} = route.params;
  const [weight, setWeight] = useState(55);

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
      <View style={styles.weightContainer}>
        <RulerPicker
          min={0}
          max={240}
          step={0.1}
          fractionDigits={1}
          initialValue={55}
          onValueChangeEnd={number => setWeight(number)}
          unit="kg"
          indicatorColor={Colors.primary}
          indicatorHeight={wh(0.12)}
          shortStepColor={Colors.primary}
          shortStepHeight={wh(0.04)}
          longStepColor={Colors.primary}
          longStepHeight={wh(0.1)}
          width={ww(0.85)}
          valueTextStyle={styles.weightTxt}
          unitTextStyle={styles.kgTxt}
        />
      </View>
      <View style={styles.bottomContainer}>
        <BackButton onPress={handleBack} />
        <NextButton btnTitle={'Next'} onPress={handleNext} />
      </View>
    </View>
  );
};

export default Weight;
