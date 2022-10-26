import React, { useState } from 'react';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

function ConfirmationScreen({navigation}) {
  
  const [message, setMessage] = useState("");
  const [pin, setPin] = useState("");

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  }
  
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const doResend = async () => {

    SecureStore.getItemAsync("TOKEN").then((token) => {
      if (!token) { 
        setMessage("This page is no longer valid.");
      } else {
        SecureStore.getItemAsync("ID").then((id) => {
          try {
            axios.post('https://livebolt-rest-api.herokuapp.com/api/sendVerifyEmail', {
              userId : id
            }).then((response) => {
              setMessage(response.data.message);
            });
          } catch(e) {
            setMessage(e);
          }
        });
      }
    });
  };

  const doVerify = async () => {

    let obj = { "pin" : pin };
    SecureStore.getItemAsync("ID").then((id) => {
      obj.id = id;

      SecureStore.getItemAsync("TOKEN").then((token) => {
        obj.token = token;
        
        try {
          axios.post('https://livebolt-rest-api.herokuapp.com/api/accountVerify', obj).then((response) => {
            setMessage(response.data.message);
            save("ID", "");
            save("TOKEN", "");
            delay(5000);
            navigation.navigate('Login');
          });
        } catch(e) {
          setMessage(e);
        }
      });
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.explainationText}>
          An email has been sent to your account's email which{"\n"}
          contains a 6-digit PIN. Please enter the PIN below to{"\n"}
          complete the verification process.
        </Text>
      </View>
      <Pressable style={styles.confirmButton} onPress={doResend}>
        <Text style={{color: 'white'}}>Resend Email</Text>
      </Pressable>
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

export default ConfirmationScreen;