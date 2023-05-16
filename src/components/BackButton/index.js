import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {BackIcon} from '@assets';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touch}
      onPress={onPress}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export default BackButton;
