import {View, Text, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {ww, wh, Colors, appImages} from '@config';
import {AppBackButton, AppButton} from '@components';

const Verification = ({navigation}) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [inputFocus, setInputFocus] = useState('input1');

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.dark1} barStyle="light-content" />
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
          <View
            style={[
              styles.inputView,
              {
                borderColor:
                  inputFocus == 'input1' || input1 !== ''
                    ? Colors.primary
                    : Colors.dark3,
              },
            ]}>
            <TextInput
              style={styles.input}
              placeholder="*"
              placeholderTextColor={Colors.white}
              value={input1}
              onChangeText={text => setInput1(text)}
              autoCapitalize="none"
              ref={ref1}
              autoCorrect={false}
              onSubmitEditing={() => ref2.current.focus()}
              returnKeyType="next"
              onFocus={() => setInputFocus('input1')}
              maxLength={1}
              autoFocus={() => {
                if (input1.length == 1) {
                  ref2.current.focus();
                }
              }}
            />
          </View>
          <View
            style={[
              styles.inputView,
              {
                borderColor:
                  inputFocus == 'input2' || input2 !== ''
                    ? Colors.primary
                    : Colors.dark3,
              },
            ]}>
            <TextInput
              style={styles.input}
              placeholder="*"
              placeholderTextColor={Colors.white}
              onChangeText={text => setInput2(text)}
              autoCapitalize="none"
              ref={ref2}
              autoCorrect={false}
              onSubmitEditing={() => ref3.current.focus()}
              returnKeyType="next"
              onFocus={() => setInputFocus('input2')}
              maxLength={1}
            />
          </View>
          <View
            style={[
              styles.inputView,
              {
                borderColor:
                  inputFocus == 'input3' || input3 !== ''
                    ? Colors.primary
                    : Colors.dark3,
              },
            ]}>
            <TextInput
              style={styles.input}
              placeholder="*"
              placeholderTextColor={Colors.white}
              onChangeText={text => setInput3(text)}
              autoCapitalize="none"
              ref={ref3}
              autoCorrect={false}
              onSubmitEditing={() => ref4.current.focus()}
              returnKeyType="next"
              onFocus={() => setInputFocus('input3')}
              maxLength={1}
            />
          </View>
          <View
            style={[
              styles.inputView,
              {
                borderColor:
                  inputFocus == 'input4' || input4 !== ''
                    ? Colors.primary
                    : Colors.dark3,
              },
            ]}>
            <TextInput
              style={styles.input}
              placeholder="*"
              placeholderTextColor={Colors.white}
              onChangeText={text => setInput4(text)}
              autoCapitalize="none"
              ref={ref4}
              autoCorrect={false}
              onSubmitEditing={() => ref5.current.focus()}
              returnKeyType="next"
              onFocus={() => setInputFocus('input4')}
              maxLength={1}
            />
          </View>
          <View
            style={[
              styles.inputView,
              {
                borderColor:
                  inputFocus == 'input5' || input5 !== ''
                    ? Colors.primary
                    : Colors.dark3,
              },
            ]}>
            <TextInput
              style={styles.input}
              placeholder="*"
              placeholderTextColor={Colors.white}
              onChangeText={text => setInput5(text)}
              autoCapitalize="none"
              ref={ref5}
              autoCorrect={false}
              onSubmitEditing={() => ref6.current.focus()}
              returnKeyType="next"
              onFocus={() => setInputFocus('input5')}
              maxLength={1}
            />
          </View>
          <View
            style={[
              styles.inputView,
              {
                borderColor:
                  inputFocus == 'input6' || input6 !== ''
                    ? Colors.primary
                    : Colors.dark3,
              },
            ]}>
            <TextInput
              style={styles.input}
              placeholder="*"
              placeholderTextColor={Colors.white}
              onChangeText={text => setInput6(text)}
              autoCapitalize="none"
              ref={ref6}
              autoCorrect={false}
              returnKeyType="done"
              onFocus={() => setInputFocus('input6')}
              maxLength={1}
            />
          </View>
        </View>
        <View style={styles.bottomSubContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.forgotTouch}
            onPress={() => console.log('Did you recieve any code?')}>
            <Text style={styles.forgotTxt}>Did you recieve any code?</Text>
          </TouchableOpacity>
          <AppButton
            btnTitle="Verify"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default Verification;
