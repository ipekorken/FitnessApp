import React from 'react';
import {StartStack, InfoStack, AuthStack} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <InfoStack />
    </NavigationContainer>
  );
};

export default App;
