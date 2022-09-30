import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/loginScreen';
import RegisterScreen from './components/registerScreen';
import HomeScreen from './components/homeScreen';
import ForgotPasswordScreen from './components/forgotPasswordScreen';
import ProfileScreen from './components/profileScreen';
import SettingsScreen from './components/settingsScreen';
import ActivityScreen from './components/activityScreen';
import LocationScreen from './components/locationScreen';
import TabNavigation from './components/tabNavigation';

process.env.REACT_APP_DEV_MODE = process.env.REACT_APP_PRO_MODE

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
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#144C81',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
          }}
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

        <Stack.Screen
          name="Settings" 
          component={SettingsScreen} 
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
