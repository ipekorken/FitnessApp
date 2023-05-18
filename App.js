import React, {useEffect, useState} from 'react';
import {StartStack, InfoStack, AuthStack, AppStack} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Splash} from './src/screens';

const App = () => {
  const userToken = useSelector(state => state.app.userToken);
  const userInfo = useSelector(state => state.app.userInfo);
  const hideInfo = useSelector(state => state.app.hideInfo);
  const hideBoardings = useSelector(state => state.app.hideBoardings);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  }, []);

  return showSplash ? (
    <Splash />
  ) : (
    <NavigationContainer>
      {userToken ? (
        <AppStack />
      ) : !hideBoardings ? (
        <StartStack />
      ) : !hideInfo ? (
        <InfoStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default App;
