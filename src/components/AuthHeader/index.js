import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ww, wh, Colors, appImages} from '@config';
import styles from './styles';

const AuthHeader = ({selectedOption, setSelectedOption, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setSelectedOption('signUp');
          onPress();
        }}
        activeOpacity={0.8}
        style={[
          styles.touch,
          {
            borderBottomColor: Colors.primary,
            borderBottomWidth: selectedOption == 'login' ? ww(0.01) : 0,
            paddingBottom: wh(0.0065),
          },
        ]}>
        <Text style={styles.txt}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedOption('login');
          onPress();
        }}
        activeOpacity={0.8}
        style={[
          styles.touch,
          {
            borderBottomColor: Colors.primary,
            borderBottomWidth: selectedOption == 'signUp' ? ww(0.01) : 0,
            paddingBottom: wh(0.0065),
            marginLeft: ww(0.1),
          },
        ]}>
        <Text style={styles.txt}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;
