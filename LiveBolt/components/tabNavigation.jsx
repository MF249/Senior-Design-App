import React from 'react';
import { Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivityScreen from './activityScreen';
import HomeScreenTab from './defaultScreen';
import ProfileScreen from './profileScreen';
import LocationScreen from './locationScreen';
import MonitorScreen from './monitorScreen';

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
                        ? 'ios-person-circle'
                        : 'ios-person-circle-outline';
                    } else if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Activity')
                    {
                        iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
                    } else if (route.name === 'Location')
                    {
                        iconName = focused ? 'ios-location' : 'ios-location-outline';
                    } else if (route.name === 'LiveFeed')
                    {
                        iconName = focused ? 'ios-camera' : 'ios-camera-outline';
                    }

                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                backBehavior: "history"
                })}
            >
                <Tab.Screen ontentContainerStyle={styles.container} name="LiveFeed" component={MonitorScreen} options={{headerShown: false}}/>
                <Tab.Screen ontentContainerStyle={styles.container} name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
                <Tab.Screen ontentContainerStyle={styles.container} name="Home" component={HomeScreenTab} options={{headerShown: false}}/>
                <Tab.Screen ontentContainerStyle={styles.container} name="Activity" component={ActivityScreen} options={{headerShown: false}}/>
                <Tab.Screen ontentContainerStyle={styles.container} name="Location" component={LocationScreen} options={{headerShown: false}}/>
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