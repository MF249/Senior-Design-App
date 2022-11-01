import React, { useEffect } from 'react';
import { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import info from '../images/icons8-info-48.png';
import axios from "axios";

function ProfileScreen() {
    
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = () => {

        try {
            SecureStore.getItemAsync("ID").then((userId) => {
                if (userId) {
                    axios.post('https://livebolt-rest-api.herokuapp.com/api/profileUser', {
                        id : userId
                    }).then((response) => {
                        setUsername(response.data.username);
                        setName(response.data.name);
                        setEmail(response.data.email);
                        setPhone(response.data.phone);
                    });
                } else { setMessage("Error: User ID not found") }
            });
        } catch(e) {
          setMessage(e);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.imageFormat} source={info}/>
            <Text>Username: {username}</Text>
            <Text>Name: {name}</Text>
            <Text>Phone Number: {phone}</Text>
            <Text>Email Address: {email}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#D7D7D7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageFormat: {
        width: 150,
        height: 150,
        display: 'flex',
        justifyContent: 'space-between'
    },
    logoutButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProfileScreen;