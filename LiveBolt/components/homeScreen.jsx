import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useLogin } from '../contexts/loginProvider';

function HomeScreen() {
    
    const { setIsLoggedIn, setIsLoading } = useLogin();
    const [ message, setMessage ] = useState("");
    
    useEffect(() => {    
        getToken("TOKEN");
    });
    
    const save = async (key, value) => {
        await SecureStore.setItemAsync(key, value);
    }

    const getToken = async (key) => {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
          setMessage('Session token: ' + result);
        } else {
          setMessage('Session token does not exist.');
        }
    }

    const doLogout = () => {
        save("TOKEN", "");
        setIsLoggedIn(false);
    };
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Pressable style={styles.logoutButton} onPress={doLogout}>
                <Text style={{color: 'white'}}>Log Out</Text>
            </Pressable>
            <Text style={{color: 'white'}}>{message}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#D7D7D7',
    },
    logoutButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 50,
    },
});

export default HomeScreen;