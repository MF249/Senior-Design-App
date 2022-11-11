import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { Text, ScrollView, StyleSheet, Pressable, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigation from './tabNavigation';
import { useLogin } from '../contexts/loginProvider';

function HomeScreen() {
    
    const { setIsLoggedIn, setIsLoading } = useLogin();
    
    const save = async (key, value) => {
        await SecureStore.setItemAsync(key, value);
    }

    const doLogout = () => {
        save("TOKEN", "");
        setIsLoggedIn(false);
    };
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topBar}>
                <Pressable style={{paddingHorizontal:5}} onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="settings-outline" size={24} color={"black"}/>
                </Pressable>
                <Pressable style={{paddingHorizontal:5}} onPress={doLogout}>
                    <Ionicons name="log-out-outline" size={24} color={"black"}/>
                </Pressable>
            </View>

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
    topBar: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        backgroundColor: "lightblue",
        paddingTop: 45,
        paddingBottom: 5,
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