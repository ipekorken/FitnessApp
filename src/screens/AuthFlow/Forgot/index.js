import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';
import {AppBackButton, AppButton} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const Forgot = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <>
      <View style={styles.screen}>
        <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <AppBackButton onPress={() => navigation.pop()} />
            <Text style={styles.title}>FORGOT PASSWORD?</Text>
            <Text style={[styles.subTitle, {marginTop: wh(0.025)}]}>
              ENTER YOUR INFORMATIONS BELOW OR
            </Text>
            <Text style={[styles.subTitle, {marginTop: wh(0.005)}]}>
              LOGIN WITH A OTHER ACCOUNT
            </Text>
            <View style={styles.bottomContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={Colors.white}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                  />
                </View>
              </View>
              <View style={styles.bottomSubContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.forgotTouch}
                  onPress={() => console.log('try another way')}>
                  <Text style={styles.forgotTxt}>Try Another Way</Text>
                </TouchableOpacity>
                <AppButton
                  btnTitle="Send"
                  onPress={() => navigation.navigate('Verification')}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Forgot;
