import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

function LoginScreen({navigation}) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("Username: " + username + " Password: " + password);
    navigation.navigate('Home');
  }

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
      <Pressable style={styles.loginButton} onPress={handleSubmit}>
        <Text style={{color: 'white'}}>Log in</Text>
      </Pressable>
      <Pressable style={{ paddingTop: 20 }} onPress={() => navigation.navigate('Password Reset')}>
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
        height: 40,
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