import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ww, wh, Colors} from '@config';
import {NextButton} from '@components';
import {FemaleIcon, MaleIcon} from '@assets';

const Gender = () => {
  const [gender, setGender] = useState('Male');

  function handleNext() {}

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>TELL US ABOUT YOURSELF!</Text>
        <View style={styles.titleView}>
          <Text style={styles.subTitle}>
            TO GIVE YOU A BETTER EXPERIENCE WE NEED
          </Text>
          <Text style={styles.subTitle}>TO KNOW YOUR GENDER</Text>
        </View>
      </View>
      <View style={styles.touchContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setGender('Male')}
          style={[
            styles.genderTouch,
            {backgroundColor: gender == 'Male' ? Colors.primary : Colors.dark2},
          ]}>
          <MaleIcon color={gender == 'Male' ? Colors.black : Colors.white} />
          <Text
            style={[
              styles.genderTxt,
              {color: gender == 'Male' ? Colors.black : Colors.white},
            ]}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setGender('Female')}
          style={[
            styles.genderTouch,
            {backgroundColor: gender == 'Male' ? Colors.dark2 : Colors.primary},
          ]}>
          <FemaleIcon color={gender == 'Male' ? Colors.white : Colors.black} />
          <Text
            style={[
              styles.genderTxt,
              {color: gender == 'Male' ? Colors.white : Colors.black},
            ]}>
            Female
          </Text>
        </TouchableOpacity>
      </View>
      <NextButton btnTitle={'Next'} onPress={handleNext} />
    </View>
  );
};

export default Gender;
