import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Text, ScrollView, StyleSheet, Pressable, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from './activityScreen';
import SettingsScreen from './settingsScreen';
import TabNavigation from './tabNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import locked from '../images/icons8-lock-150.png';
import unlocked from '../images/icons8-padlock-150.png';
import info from '../images/icons8-info-48.png';

function DefaultScreen({navigation}) {
    
let [lock, setlock] = React.useState(true);
let changeImage = () => setlock(previousState => !previousState);
let imagePath = lock ? locked : unlocked;

let [locktext, setlocktext] = React.useState(true);
let changeText = () => setlocktext(previousState => !previousState);
let texttodisplay = locktext ? 'Unlock' : 'Lock';

const [currentDate, setCurrentDate] = useState('');
const [currentTime, setCurrentTime] = useState('');

useEffect(() => {
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var sec = new Date().getSeconds(); //Current Seconds
setCurrentDate(
    date + '/' + month + '/' + year 
);
setCurrentTime(
    hours + ':' + min + ':' + sec
)
}, []);

const doActivity = () => {

    try {
      axios.post('https://livebolt-rest-api.herokuapp.com/api/addActivity', {
        time : currentTime,
        date : currentDate,
        status: locktext
      }).then((response) => {
        console.log('Sent');
      });
    } catch(e) {
      setMessage(e);
    }
  };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>
                Current Date Time
            </Text>
            <Text>
                {currentDate}
            </Text>
            <TouchableOpacity>
                <Image style={styles.infoImageFormat} source={info}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => {changeImage(); changeText(); doActivity()} }>
                <Image style={styles.imageFormat} source={imagePath} />
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>Tap Icon to {texttodisplay}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7D7D7',
    },
    logoutButton: {
        backgroundColor: '#041847',
        borderRadius: 10,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    imageFormat: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    infoImageFormat: {
        width: 36,
        height: 36,
        alignSelf: 'flex-end'
    }
});

export default DefaultScreen;