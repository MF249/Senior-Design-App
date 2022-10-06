import React from 'react';
import { Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import info from '../images/icons8-info-48.png';

function ProfileScreen({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.imageFormat} source={info}/>
            <Text>John Smith</Text>
            <Text>john_smith</Text>
            <Text>johnsmith@email.com</Text>
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