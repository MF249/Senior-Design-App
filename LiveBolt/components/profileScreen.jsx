import React, { useEffect } from 'react';
import { useState } from 'react';
import { Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import info from '../images/icons8-info-48.png';

function ProfileScreen({navigation}) {
    const [name, setName] = useState([]);
    const [phone, setPhone] = useState([]);
    const [email, setEmail] = useState([]);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    useEffect(() => {
        fetch("https://livebolt-rest-api.herokuapp.com/api/profileUser", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: "633cd5813d6503bedad92a50"
            })
        })
        .then((response) => response.json()).then((responseJson) => {
            console.log(responseJson);
        })
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.imageFormat} source={info}/>
            <Text>{name}</Text>
            <Text>{phone}</Text>
            <Text>{email}</Text>
            <Text>{username}</Text>
            <Text>{password}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#D7D7D7',
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