import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding1, OnBoarding2, OnBoarding3, SpinnerSplash} from '@screens';

const Stack = createNativeStackNavigator();

export default function StartStack() {
  return (
    <Stack.Navigator
      initialRouteName="SpinnerSplash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SpinnerSplash" component={SpinnerSplash} />
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
    </Stack.Navigator>
  );
}
