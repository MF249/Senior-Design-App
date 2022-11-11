import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function LogEvent(props) {

    return (
        <View style={styles.container}>
            {props.toggle && (
                <Text style={{fontSize: 17, color: 'darkblue'}}>Lock enabled at{props.time}</Text>
            )}

            {!props.toggle && (
                <Text style={{fontSize: 17, color: 'darkblue'}}>Lock disabled at{props.time}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 320,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C1C1C1',
    },
});

export default LogEvent;