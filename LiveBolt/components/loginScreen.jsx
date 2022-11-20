import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useLogin } from '../contexts/loginProvider';
import axios from "axios";

function LoginScreen({navigation}) {
  
  const { setIsLoggedIn, setIsLoading } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  }

  const doLogin = () => {

    try {
      axios.post('https://livebolt-rest-api.herokuapp.com/api/login', {
        username : username,
        password : password
      }).then((response) => {
        
        if(!response.data.token) {
          setMessage(response.data.message);
        } else if(response.data.verify == -1) {
          save("TOKEN", response.data.token).then(() => {
            save("ID", response.data.id);
          });
          navigation.navigate('Email Confirmation');
        } else {
          save("TOKEN", response.data.token).then(() => {
            save("ID", response.data.id);
          });
          setIsLoggedIn(true);
        }
      });
    } catch(e) {
      setMessage(e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.titleText}>Live Bolt</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 20 }}>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Text style={{color: 'red', paddingBottom: 15}}> {message} </Text>
      <Pressable style={styles.loginButton} onPress={doLogin}>
        <Text style={{color: 'white'}}>Log in</Text>
      </Pressable>
      <Pressable style={{ paddingTop: 20 }} onPress={() => navigation.navigate('Reset Request')}>
        <Text style={{color: 'white'}}>Forgot your password?</Text>
      </Pressable>
      <Pressable style={{ position:'absolute', bottom: 0, paddingBottom: 50 }} onPress={() => navigation.navigate('Account Creation')}>
        <Text style={{color: 'white'}}>Don't have an account? Sign up here.</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#144C81',
    },
    inputView: {
        paddingVertical: 5,
    },
    inputField: {
        height: 50,
        width: 280,
        backgroundColor: 'white',
        color: 'gray',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    titleText: {
        fontSize: 40,
        paddingTop: 200,
        paddingBottom: 10,
        color: 'white',
    },
    loginButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen;