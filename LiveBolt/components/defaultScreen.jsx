import React, { useState } from 'react';
import { Image } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Text, ScrollView, StyleSheet, Pressable, Modal, View, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import locked from '../images/icons8-lock-150.png';
import unlocked from '../images/icons8-padlock-150.png';
import info from '../images/icons8-info-48.png';
import axios from "axios";

function DefaultScreen() {
    
    const [lock, setlock] = useState(true);
    const [locktext, setlocktext] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState("");

    const [isEnabledOne, setIsEnabledOne] = useState(false);
    const [isEnabledTwo, setIsEnabledTwo] = useState(false);
    const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);

    let imagePath = lock ? locked : unlocked;
    let texttodisplay = locktext ? 'Unlock' : 'Lock';

    const biometricsCheck = async () => {
        if (isEnabledOne) {
            setIsEnabledOne(false);
        } else {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            if (!compatible) {
                alert('This device is not compatible for biometric authentication');
                return;
            }
        
            const enrolled = await LocalAuthentication.isEnrolledAsync()
            if (!enrolled) {
                alert('This device does not have biometric authentication enabled');
                return;
            }

            setIsEnabledOne(true);
            alert('Biometics check enabled');
        }
    }

    const interactLock = async () => {
        setModalVisible(!modalVisible);

        if (isEnabledOne) {
            const isAuthenticated = await LocalAuthentication.authenticateAsync();
            if (!isAuthenticated) { 
                alert('Biometrics check failed');
                return; 
            }
        }

        setlock(previousState => !previousState);
        setlocktext(previousState => !previousState);
        
        let lockStatus = lock ? '-1' : '1';
        let stamp = (new Date()).toLocaleString();

        try {
            axios.post('https://livebolt-rest-api.herokuapp.com/api/addActivity', {
                timestamp : stamp,
                status : lockStatus
            }).then((response) => {
                if (response.data.acknowledged) {
                    setMessage("Success!");
                } else {
                    setMessage(response.data.message);
                }
            }).catch(error => console.log(error));
        } catch(e) {
            setMessage(e);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity>
                <Image style={styles.infoImageFormat} source={info}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => setModalVisible(true) }>
                <Image style={styles.imageFormat} source={imagePath} />
            </TouchableOpacity>
            
            <Text style={{ textAlign:'center', paddingBottom: 50 }}>Tap Icon to {texttodisplay}</Text>
            
            <View style={styles.switchView}>
                <Text style={{ paddingRight: 15 }}>Enable Biometrics</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#3ee14d" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={biometricsCheck}
                    value={isEnabledOne}
                />
            </View>

            <View style={styles.switchView}>
                <Text style={{ paddingRight: 15 }}>Enable Text Messages</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#3ee14d" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchTwo}
                    value={isEnabledTwo}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure?
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={interactLock}
                        >
                            <Text style={styles.textStyle}>Confirm</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Text style={{color: 'red', paddingBottom: 15}}> {message} </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    switchView: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50,
    }
});

export default DefaultScreen;