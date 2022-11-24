import React, { useState } from 'react';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

function ResetConfirmation({navigation}) {
  
    const [message, setMessage] = useState("");
    const [pin, setPin] = useState("");

    const save = async (key, value) => {
        await SecureStore.setItemAsync(key, value);
    }

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const doVerify = async () => {

        let obj = { "pin" : pin };
        SecureStore.getItemAsync("ID").then((id) => {
            obj.id = id;
            try {
                axios.post('https://livebolt-rest-api.herokuapp.com/api/resetVerify', obj)
                .then((response) => {
                    if (response.data.match) { 
                        navigation.navigate('Password Change');
                    } else {
                        setMessage(response.data.message);
                    }
                });
            } catch(e) { setMessage(e) }
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.explainationText}>
                    An email has been sent to your account's email which{"\n"}
                    contains a 6-digit PIN. Please enter the PIN below to{"\n"}
                    continue with resetting your password.
                </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter PIN"
                    onChangeText={(pin) => setPin(pin)}
                />
            </View>
            <Text style={styles.explainationText}>
                {message}
            </Text>
            <Pressable style={styles.confirmButton} onPress={doVerify}>
                <Text style={{color: 'white'}}>Submit</Text>
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
    explainationText: {
        fontSize: 15,
        paddingTop: 120,
        paddingBottom: 10,
        color: '#041847',
    },
    inputView: {
      paddingVertical: 10,
      paddingBottom: 20,
    },
    inputField: {
      height: 40,
      width: 300,
      backgroundColor: 'white',
      color: 'gray',
      borderRadius: 15,
      paddingHorizontal: 10,
    },
    confirmButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ResetConfirmation;