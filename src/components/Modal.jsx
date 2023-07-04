import { StyleSheet, Text, View, Modal, Pressable, } from "react-native";
import React from "react";

const ModalTask = ({
    modalVisible,
    setModalVisible,
    taskActive,
    onPressStatus
}) => {
    return (
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
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonDone]}
                            onPress={() => onPressStatus(true)}
                        >
                            <Text style={styles.textStyle}>Fue realizada</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonNotyet]}
                            onPress={() => onPressStatus(false)}
                        >
                            <Text style={styles.textStyle}>No fue realizada</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalTask;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonDone: {
        backgroundColor: "#00c10f",
        display: "block",
    },
    buttonNotyet: {
        backgroundColor: "red",
        display: "block",
    },
    buttonClose: {
        backgroundColor: "grey",
        display: "block",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        display: "block",
    },
    modalText: {
        marginBottom: 15,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
});
