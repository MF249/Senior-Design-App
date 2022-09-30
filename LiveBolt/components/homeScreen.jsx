import React from 'react';
import { Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActivityScreen from './activityScreen';
import SettingsScreen from './settingsScreen';
import TabNavigation from './tabNavigation';

function HomeScreen({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "lightblue" }}>
                <Pressable style={{paddingHorizontal:5}} onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="settings-outline" size={24} color={"black"}/>
                </Pressable>
                <Text style={{alignSelf: 'center'}}>Logged in as...</Text>
                <Pressable style={{paddingHorizontal:5}} onPress={() => navigation.navigate('Login')}>
                    <Ionicons name="log-out-outline" size={24} color={"black"}/>
                </Pressable>
            </div>

            <TabNavigation/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D7D7D7',
    },
    logoutButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'row'
    },
});

export default HomeScreen;