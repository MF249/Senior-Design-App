import React, { useState } from 'react';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

function ForgotPasswordScreen({navigation}) {
  
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  }

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const doSend = async () => {
    try {
      axios.post('https://livebolt-rest-api.herokuapp.com/api/sendResetEmail', {
        email : email
      }).then((response) => {
        if(!response.data.userId) {
          setMessage(response.data.message);
        } else {
          save("ID", response.data.userId).then(() => {
            setMessage(response.data.message);
            delay(3000);
            navigation.navigate("Reset Confirm");
          });
        }
      });
    } catch(e) {
      setMessage(e);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.explainationText}>
          If you have forgotten your password, you can enter{"\n"}
          the email linked with your account below.{"\n"}{"\n"}
          An email will be sent to that address containing a 
          verification number to change your password.
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputField}
          placeholder="Email Address"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Text style={{color: 'red', paddingBottom: 15}}> {message} </Text>
      <Pressable style={styles.confirmButton} onPress={doSend}>
        <Text style={{color: 'white'}}>Send</Text>
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

export default ForgotPasswordScreen;