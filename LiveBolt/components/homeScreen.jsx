import React from 'react';
import { Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useLogin } from '../contexts/loginProvider';

function HomeScreen() {
    
    const { userToken, setUserToken } = useLogin();

    const doLogout = () => {
        // setIsLoggedIn(false);
        console.log(userToken);
    };

    const getValueFor = async (key) => {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
          console.log('Session token: ' + result);
        } else {
          console.log('Session token does not exist.');
        }
      }
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Logged in as...</Text>
            <Pressable style={styles.logoutButton} onPress={doLogout}>
                <Text style={{color: 'white'}}>Log Out</Text>
            </Pressable>
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
    },
});

export default HomeScreen;