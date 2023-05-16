import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {NextIcon} from '@assets';

const NextButton = ({onPress, btnTitle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touch}
      onPress={onPress}>
      <Text style={styles.txt}>{btnTitle}</Text>
      <NextIcon />
    </TouchableOpacity>
  );
};

export default NextButton;
