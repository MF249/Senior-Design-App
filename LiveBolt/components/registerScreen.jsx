import React, { useState } from 'react';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

function RegisterScreen({navigation}) {
  
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  }
  
  const doRegister = () => {

    try {
      axios.post('https://livebolt-rest-api.herokuapp.com/api/register', {
        username : username,
        password : password,
        name: name,
        email: email,
        phone: phone,
      }).then((response) => {
        if (response.data.acknowledged) {
          save("ID", response.data.insertedId);
          save("TOKEN", response.data.token);
          navigation.navigate('Email Confirmation');
        } else {
          setMessage(response.data.message);
        }
      });
    } catch(e) {
      console.log(e);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.firstView}>
        <TextInput
          style={styles.inputField}
          placeholder="Full Name"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputField}
          placeholder="Email Address"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.lastView}>
        <TextInput
          style={styles.inputField}
          placeholder="Phone Number"
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
      <Text style={{color: 'red', paddingBottom: 15}}> {message} </Text>
      <Pressable style={styles.continueButton} onPress={doRegister}>
        <Text style={{color: 'white'}}>Create Account</Text>
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
    inputView: {
        paddingVertical: 10,
    },
    inputField: {
        height: 40,
        width: 300,
        backgroundColor: 'white',
        color: 'gray',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    firstView: {
        paddingVertical: 10,
        paddingTop: 100,
    },
    lastView: {
        paddingVertical: 10,
        paddingBottom: 100,
    },
    continueButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RegisterScreen;