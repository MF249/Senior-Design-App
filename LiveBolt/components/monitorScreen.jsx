import React from 'react';
import { Text, ScrollView, StyleSheet, Pressable } from 'react-native';

function MonitorScreen({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#D7D7D7',
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

export default MonitorScreen;