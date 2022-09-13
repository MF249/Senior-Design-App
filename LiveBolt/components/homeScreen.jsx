import React from 'react';
import { Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivityScreen from './activityScreen';
import SettingsScreen from './settingsScreen';
import TabNavigation from './tabNavigation';

//const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{alignSelf: 'center'}}>Logged in as...</Text>
            <Pressable style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Log Out</Text>
            </Pressable>

            <TabNavigation/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7D7D7',
    },
    logoutButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default HomeScreen;