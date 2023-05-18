import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';
import {AuthHeader, BackButton, NextButton} from '@components';
import {HideEyeIcon, EyeIcon, PrimaryTickSquare, RedCloseSquare} from '@assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch} from 'react-redux';
import {setUserToken} from '@redux';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const refPass = useRef();
  const [selectedOption, setSelectedOption] = useState('login');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [secure, setSecure] = useState(true);
  const [correct, setCorrect] = useState('');

  function chooseSignUp() {
    navigation.navigate('Register');
  }

  function handleApple() {
    console.log('login with apple account');
  }
  function handleGoogle() {
    console.log('login with google account');
  }
  function handleLogin() {
    console.log('on login');
    dispatch(setUserToken('token'));
  }
  function handleForgot() {
    navigation.navigate('Forgot');
  }

  return (
    <>
      <View style={styles.screen}>
        <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
        <Image source={appImages.loginImg} style={styles.loginImg} />
        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <AuthHeader
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              onPress={chooseSignUp}
            />

            <View style={styles.welcomeView}>
              <Text style={styles.welcome}>Welcome</Text>
              <Text style={styles.welcome}>Back!</Text>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={Colors.white}
                  placeholder="Email"
                  onChangeText={text => setEmail(text)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onSubmitEditing={() => refPass.current.focus()}
                  returnKeyType="next"
                />
                {correct == 'false' && <RedCloseSquare />}
                {correct == 'true' && <PrimaryTickSquare />}
              </View>
              <View style={[styles.inputView, {marginTop: wh(0.05)}]}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={Colors.white}
                  placeholder="Password"
                  onChangeText={text => {
                    setPass(text);
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                  ref={refPass}
                  returnKeyType="done"
                  secureTextEntry={secure}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSecure(!secure)}>
                  {secure && <EyeIcon />}
                  {!secure && <HideEyeIcon />}
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.forgotTouch}
              onPress={handleForgot}>
              <Text style={styles.forgotTxt}>Forgot Password</Text>
            </TouchableOpacity>

            <View style={styles.bottomContainer}>
              <View style={styles.bottomLeft}>
                <BackButton btnType={'apple'} onPress={handleApple} />
                <View style={{width: ww(0.035)}}></View>
                <BackButton btnType={'google'} onPress={handleGoogle} />
              </View>
              <NextButton btnTitle={'Login'} onPress={handleLogin} />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default Login;
