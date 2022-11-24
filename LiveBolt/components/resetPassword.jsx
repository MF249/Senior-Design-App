import React, { useState } from 'react';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

function ResetPasswordScreen({navigation}) {
  
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  }

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const doChange = async () => {
    if (password !== confirmPassword) {
        setMessage("Passwords must match!");
    } else {
      SecureStore.getItemAsync("ID").then((userId) => {
        try {
          axios.post('https://livebolt-rest-api.herokuapp.com/api/changePassword', {
            password : password,
            id : userId
          }).then((response) => {
            if(!response.data.confirm) {
              setMessage(response.data.message);
            } else {
              save("ID", "");
              setMessage(response.data.message);
              delay(3000);
              navigation.navigate("Login");
            }
          });
        } catch(e) { setMessage(e) }
      });
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{paddingTop: 50, paddingBottom: 10}}>
        <TextInput
          style={styles.inputField}
          placeholder="New Password"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={{paddingTop: 20, paddingBottom: 10}}>
        <TextInput
          style={styles.inputField}
          placeholder="Confirm Password"
          onChangeText={(confirm) => setConfirmPassword(confirm)}
        />
      </View>
      <Text style={{color: 'red', paddingBottom: 15}}> {message} </Text>
      <Pressable style={styles.confirmButton} onPress={doChange}>
        <Text style={{color: 'white'}}>Change</Text>
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
        paddingTop: 150,
        paddingBottom: 10,
        color: '#041847',
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

export default ResetPasswordScreen;