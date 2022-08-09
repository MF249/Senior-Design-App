import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.titleText}>Live Bolt</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={{
            height: 40,
            width: 280,
            backgroundColor: 'white',
            color: 'gray',
            borderRadius: 15,
          }}
          defaultValue="   Username"
        />
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 20 }}>
        <TextInput
          style={{
            height: 40,
            width: 280,
            backgroundColor: 'white',
            color: 'gray',
            borderRadius: 15,
          }}
          defaultValue="   Password"
        />
      </View>
      <Pressable style={styles.loginButton}>
        <Text style={{color: 'white'}}>Log in</Text>
      </Pressable>
      <Pressable style={{ paddingTop: 20 }}>
        <Text style={{color: 'white'}}>Forgot your password?</Text>
      </Pressable>
      <Pressable style={{ position:'absolute', bottom: 0, paddingBottom: 20 }}>
        <Text style={{color: 'white'}}>Don't have an account? Sign up here.</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#144C81',
  },
  inputView: {
    paddingVertical: 5,
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

export default App;
