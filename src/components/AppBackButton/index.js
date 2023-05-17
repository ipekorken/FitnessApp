import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {SmallBackIcon} from '@assets';

const AppBackButton = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touch}
      onPress={onPress}>
      <SmallBackIcon />
    </TouchableOpacity>
  );
};

export default AppBackButton;
