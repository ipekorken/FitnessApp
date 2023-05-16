import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, OnBoarding1, OnBoarding2, OnBoarding3} from '@screens';

const Stack = createNativeStackNavigator();

export default function StartStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
    </Stack.Navigator>
  );
}
