import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Pressable } from 'react-native';

function ForgotPasswordScreen() {
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
            defaultValue="   Email Address"
          />
        </View>
        <Pressable style={styles.confirmButton}>
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