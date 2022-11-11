import React, { useState } from 'react';
import axios from "axios";
import { Text, ScrollView, StyleSheet, Pressable, Button, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LogEvent from './logEvent';

function ActivityScreen() {
    
    const [date, setDate] = useState(new Date());
    const [message, setMessage] = useState("");
    const [listActivities, setListActivities] = useState([]);

    const pushActivity = (newElement, index) => {
        
        if (newElement.toggle) {
            setListActivities(oldDates => [...oldDates, 
                <LogEvent 
                    key={index}
                    toggle={1}
                    time={newElement.time}
                />
            ]);
        } else {
            setListActivities(oldDates => [...oldDates, 
                <LogEvent 
                    key={index}
                    time={newElement.time}
                />
            ]);
        }
    }
    
    const getActivity = () => {
        
        setListActivities([]);
        setMessage("");
        let activityDate = date.toLocaleString().slice(0, 10);
        try {
            axios.post('https://livebolt-rest-api.herokuapp.com/api/getActivity', {
                date : activityDate
            }).then((response) => {
                // console.log(response.data);
                if (response.data.lockTime) {
                    for (let i = 0; i < response.data.lockTime.length; i++) {
                        pushActivity(response.data.lockTime[i], i);
                    }
                } else {
                    setMessage(response.data.message);
                }
            });
        } catch(e) {
          setMessage(e);
        }
    };

    function onDateSelected(event, value) {
        setDate(value);
    };
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <DateTimePicker
                value={date}
                mode={'date'}
                is24Hour={true}
                onChange={onDateSelected}
                style={styles.datePicker}
            />
            <Text style={{color: 'red', paddingBottom: 15}}> {message} </Text>
            <Text>{listActivities}</Text>
            <Pressable style={styles.loginButton} onPress={getActivity}>
                <Text style={{color: 'white'}}>Test API</Text>
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
    loginButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    datePicker: {
        justifyContent: 'center',
        width: 85,
        height: 100,
    },
});

export default ActivityScreen;