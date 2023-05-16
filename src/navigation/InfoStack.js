import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Age, Gender, Goal, Height, Level, Weight} from '@screens';

const Stack = createNativeStackNavigator();

export default function InfoStack() {
  return (
    <Stack.Navigator
      initialRouteName="Gender"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="Age" component={Age} />
      <Stack.Screen name="Weight" component={Weight} />
      <Stack.Screen name="Height" component={Height} />
      <Stack.Screen name="Goal" component={Goal} />
      <Stack.Screen name="Level" component={Level} />
    </Stack.Navigator>
  );
}
