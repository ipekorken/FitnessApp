import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';
import {AppBackButton, AppButton} from '@components';
import {OTP} from 'react-native-otp-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const Verification = ({navigation}) => {
  const [code, setCode] = useState('');

  return (
    <>
      <View style={styles.screen}>
        <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <AppBackButton onPress={() => navigation.pop()} />
            <Text style={styles.title}>VERIFICATION</Text>
            <Text style={[styles.subTitle, {marginTop: wh(0.025)}]}>
              CHECK YOUR EMAIL. WE'VE SENT YOU
            </Text>
            <Text style={[styles.subTitle, {marginTop: wh(0.005)}]}>
              THE PON AT YOUR EMAIL
            </Text>
            <View style={styles.bottomContainer}>
              <View style={styles.inputContainer}>
                <OTP
                  style={styles.inputView}
                  codeCount={6}
                  onFinish={finish => setCode(finish)}
                  placeholder="*"
                  placeholderTextColor={Colors.white}
                />
              </View>
              <View style={styles.bottomSubContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.forgotTouch}
                  onPress={() => console.log('Did you recieve any code?')}>
                  <Text style={styles.forgotTxt}>
                    Did you recieve any code?
                  </Text>
                </TouchableOpacity>
                <AppButton
                  btnTitle="Verify"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Verification;
