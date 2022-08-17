import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

const LoginScreen = ({ navigation }) => {
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
      <Pressable style={{ position:'absolute', bottom: 0, paddingBottom: 50 }} onPress={() => navigation.navigate('Account Creation')}>
        <Text style={{color: 'white'}}>Don't have an account? Sign up here.</Text>
      </Pressable>
    </ScrollView>
  );
};

const RegisterScreen = () => {
  return (
    <ScrollView contentContainerStyle={stylesTwo.container}>
      <View style={stylesTwo.firstView}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            backgroundColor: 'white',
            color: 'gray',
            borderRadius: 15,
          }}
          defaultValue="   First Name"
        />
      </View>
      <View style={stylesTwo.inputView}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            backgroundColor: 'white',
            color: 'gray',
            borderRadius: 15,
          }}
          defaultValue="   Last Name"
        />
      </View>
      <View style={stylesTwo.inputView}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            backgroundColor: 'white',
            color: 'gray',
            borderRadius: 15,
          }}
          defaultValue="   Email Address"
        />
      </View>
      <View style={stylesTwo.lastView}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            backgroundColor: 'white',
            color: 'gray',
            borderRadius: 15,
          }}
          defaultValue="   Phone Number"
        />
      </View>
      <Pressable style={stylesTwo.continueButton}>
        <Text style={{color: 'white'}}>Continue</Text>
      </Pressable>
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  
          name="Login" 
          component={LoginScreen}
          options={{headerShown: false}}
        />
        
        <Stack.Screen 
          name="Account Creation" 
          component={RegisterScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#144C81',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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


const stylesTwo = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#D7D7D7',
  },
  inputView: {
    paddingVertical: 10,
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
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
