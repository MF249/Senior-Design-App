import React, { useState } from 'react';
import { Image } from 'react-native';
import { Text, ScrollView, StyleSheet, Pressable, Modal, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import locked from '../images/icons8-lock-150.png';
import unlocked from '../images/icons8-padlock-150.png';
import info from '../images/icons8-info-48.png';
import axios from "axios";

function DefaultScreen({navigation}) {
    
    const [lock, setlock] = useState(true);
    const [locktext, setlocktext] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState("Testing...");

    let imagePath = lock ? locked : unlocked;
    let texttodisplay = locktext ? 'Unlock' : 'Lock';

    const interactLock = () => {
        setModalVisible(!modalVisible);
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
            
            <Text style={{textAlign:'center'}}>Tap Icon to {texttodisplay}</Text>

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
    }
});

export default DefaultScreen;