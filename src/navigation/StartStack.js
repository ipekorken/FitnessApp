import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding1, OnBoarding2, OnBoarding3} from '@screens';

const Stack = createNativeStackNavigator();

export default function StartStack() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding1"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
    </Stack.Navigator>
  );
}
