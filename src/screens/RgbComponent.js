import React from 'react';
import { TouchableOpacity } from 'react-native';
import {  View, Text, StyleSheet, Alert } from 'react-native';


const RgbComponent = () => {

    const dataGenarate = () => {
        let red = Math.floor(Math.random() * 256 );
        let green = Math.floor(Math.random() * 256 );
        let blue = Math.floor(Math.random() * 256 );
        return `rgb(${red},${green},${blue})`;
    }

    return (
    <View style={styles.viewStyle}>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={ () => {
                Alert.alert(dataGenarate());
            }}>
            <Text style={styles.textStyle}>
                Genarate Random Color
            </Text>
        </TouchableOpacity>
        <View style={styles.imgContainer}>
            <Text style={{
                backgroundColor: "rgb(212,12,178)",
                width: 100,
                height: 100,
                borderRadius: 5,
            }}>
            </Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        marginVertical: 60,
        padding: 40,
        alignSelf: "center"
    },
    buttonStyle: {
        width: 380,
        height: 40,
        backgroundColor: "black",
        alignItems: "center",
        marginBottom: 25,
        borderRadius: 10
    },
    textStyle: {
        color: "white",
        fontSize: 30,
        fontWeight: 900
    },
    imgContainer: {
        marginVertical: 50,
        paddingHorizontal: 30,
        display: "flex",
    },
})

export default RgbComponent;
