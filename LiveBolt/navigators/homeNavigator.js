import HomeScreen from '../components/homeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen  
                name="Home" 
                component={HomeScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;