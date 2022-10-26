import LoginScreen from '../components/loginScreen';
import RegisterScreen from '../components/registerScreen';
import ForgotPasswordScreen from '../components/forgotPasswordScreen';
import ConfirmationScreen from '../components/confirmationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
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
                    headerStyle: { backgroundColor: '#144C81'},
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFF',
                }}
            />

            <Stack.Screen
                name="Password Reset" 
                component={ForgotPasswordScreen} 
                options={{
                    headerStyle: { backgroundColor: '#144C81' },
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFF',
                }}
            />

            <Stack.Screen
                name="Email Confirmation" 
                component={ConfirmationScreen} 
                options={{
                    headerStyle: { backgroundColor: '#144C81' },
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFF',
                    headerLeft: null,
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;