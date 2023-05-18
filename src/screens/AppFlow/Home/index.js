import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';

const Home = () => {
  const userToken = useSelector(state => state.app.userToken);
  const userInfo = useSelector(state => state.app.userInfo);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Gender: {userInfo.gender}</Text>
      <Text>Age: {userInfo.age}</Text>
      <Text>Weight: {userInfo.weight}</Text>
      <Text>Height: {userInfo.height}</Text>
      <Text>Goal: {userInfo.goal}</Text>
      <Text>Level: {userInfo.level}</Text>
      <Text>Token: {userToken}</Text>
    </View>
  );
};

export default Home;
