import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Forgot, Login, Register, Verification} from '@screens';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
}
