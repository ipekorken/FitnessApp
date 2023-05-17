import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';
import {AuthHeader, BackButton, NextButton} from '@components';
import {HideEyeIcon, EyeIcon, PrimaryTickSquare, RedCloseSquare} from '@assets';

const Register = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('signUp');
  const refPass = useRef();
  const refPassAgain = useRef();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passAgain, setPassAgain] = useState('');
  const [secure, setSecure] = useState(true);
  const [secureAgain, setSecureAgain] = useState(true);
  const [correct, setCorrect] = useState('');

  function chooseLogin() {
    navigation.navigate('Login');
  }
  function handleApple() {
    console.log('login with apple account');
  }
  function handleGoogle() {
    console.log('login with google account');
  }
  function handleLogin() {
    console.log('on login');
  }
  function handleForgot() {
    navigation.navigate('Forgot');
  }

  return (
    <>
      <View style={styles.screen}>
        <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
        <Image source={appImages.signUpImg} style={styles.signUpImg} />
        <AuthHeader
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          onPress={chooseLogin}
        />
        <View style={styles.helloView}>
          <Text style={styles.hello}>HELLO,</Text>
          <Text style={[styles.subHello, {marginTop: wh(0.025)}]}>
            ENTER YOUR INFORMATIONS BELOW FOR
          </Text>
          <Text style={[styles.subHello, {marginTop: wh(0.005)}]}>
            LOGIN WITH A OTHER ACCOUNT
          </Text>
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
              returnKeyType="next"
              secureTextEntry={secure}
              onSubmitEditing={() => refPassAgain.current.focus()}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSecure(!secure)}>
              {secure && <EyeIcon />}
              {!secure && <HideEyeIcon />}
            </TouchableOpacity>
          </View>
          <View style={[styles.inputView, {marginTop: wh(0.05)}]}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.white}
              placeholder="Password Again"
              onChangeText={text => {
                setPassAgain(text);
              }}
              autoCapitalize="none"
              autoCorrect={false}
              ref={refPassAgain}
              returnKeyType="done"
              secureTextEntry={secureAgain}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSecureAgain(!secureAgain)}>
              {secureAgain && <EyeIcon />}
              {!secureAgain && <HideEyeIcon />}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.forgotTouch} onPress={handleForgot}>
          <Text style={styles.forgotTxt}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomLeft}>
            <BackButton btnType={'apple'} onPress={handleApple} />
            <View style={{width: ww(0.035)}}></View>
            <BackButton btnType={'google'} onPress={handleGoogle} />
          </View>
          <NextButton btnTitle={'Sign Up'} onPress={handleLogin} />
        </View>
      </View>
    </>
  );
};

export default Register;
