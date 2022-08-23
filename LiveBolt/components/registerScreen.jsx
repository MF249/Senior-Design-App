import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

function RegisterScreen() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.firstView}>
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
        <View style={styles.inputView}>
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
        <View style={styles.inputView}>
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
        <View style={styles.lastView}>
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
        <Pressable style={styles.continueButton}>
          <Text style={{color: 'white'}}>Continue</Text>
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

export default RegisterScreen;