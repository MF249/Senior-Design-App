import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigators/mainNavigator';
import LoginProvider from './contexts/loginProvider';

const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}

export default App;
