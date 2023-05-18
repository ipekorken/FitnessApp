import {ImageBackground, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';

const Splash = () => {
  return (
    <ImageBackground style={styles.screen} source={appImages.splashImg}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
    </ImageBackground>
  );
};

export default Splash;
