import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/loginScreen';
import RegisterScreen from './components/registerScreen';
import ForgotPasswordScreen from './components/forgotPasswordScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  
          name="Login" 
          component={LoginScreen}
          options={{headerShown: false}}
        />
        
        <Stack.Screen 
          name="Account Creation" 
          component={RegisterScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#144C81',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
          }}
        />

        <Stack.Screen
          name="Password Reset" 
          component={ForgotPasswordScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#144C81',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
