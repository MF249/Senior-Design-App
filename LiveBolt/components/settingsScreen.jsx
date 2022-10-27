import React from 'react';
import { render } from 'react-dom';
import { Text, ScrollView, StyleSheet, Pressable, TouchableOpacity, View } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import SettingsSearchBar from './settingsSearchBar';

function SettingsScreen({navigation}) {
    
        return (
        <ScrollView style={styles.container}>
            <SearchBar
                placeholder="Type Here..."
            />
            <View>
                <TouchableOpacity style={{backgroundColor:"gray", padding:10, margin:10}}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"gray", padding:10, margin:10}}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"gray", padding:10, margin:10}}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"gray", padding:10, margin:10}}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"gray", padding:10, margin:10}}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"gray", padding:10, margin:10}}>
                    <Text style={{color: 'white', alignSelf: 'center'}}>About</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        );  
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#D7D7D7',
    },
    buttonPadding: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        paddingTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default SettingsScreen;