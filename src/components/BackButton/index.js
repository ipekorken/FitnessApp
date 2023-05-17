import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {BackIcon, AppleIcon, GoogleIcon} from '@assets';

const BackButton = ({onPress, btnType}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touch}
      onPress={onPress}>
      {btnType == 'google' ? (
        <GoogleIcon />
      ) : btnType == 'apple' ? (
        <AppleIcon />
      ) : (
        <BackIcon />
      )}
    </TouchableOpacity>
  );
};

export default BackButton;
