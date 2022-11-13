import React from 'react';
import { Text, ScrollView, StyleSheet, Pressable, Image, View} from 'react-native';
import WebView from 'react-native-webview';
import imgh from '../images/icons8-info-48.png'

function MonitorScreen({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
            <Text>                                                                                                 </Text>
                <WebView
                    source={{ uri: 'http://192.168.1.180:8000/' }}/>
            <Text>                                                                                                 </Text>
            </View>
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