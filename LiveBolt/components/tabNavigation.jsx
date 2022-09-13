import React from 'react';
import { Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivityScreen from './activityScreen';
import SettingsScreen from './settingsScreen';
import HomeScreen from './homeScreen';
import ProfileScreen from './profileScreen';
import LocationScreen from './locationScreen';

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
            <Tab.Navigator 
            contentContainerStyle={styles.container}
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Profile') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen ontentContainerStyle={styles.container} name="Settings" component={SettingsScreen} />
                <Tab.Screen ontentContainerStyle={styles.container} name="Profile" component={ProfileScreen} />
                <Tab.Screen ontentContainerStyle={styles.container} name="Home" component={HomeScreen} />
                <Tab.Screen ontentContainerStyle={styles.container} name="Activity" component={ActivityScreen} />
                <Tab.Screen ontentContainerStyle={styles.container} name="Location" component={LocationScreen} />
            </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
        alignContent: 'center',
        backgroundColor: '#D7D7D7',
    },
    logoutButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabNavigation;