import React, { useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import {  View, Text, StyleSheet, Alert } from 'react-native';


const RgbComponent = () => {

    const [newColor, setnewColor] = useState([]);
    const dataGenarate = () => {
        let red = Math.floor(Math.random() * 256 );
        let green = Math.floor(Math.random() * 256 );
        let blue = Math.floor(Math.random() * 256 );
        return `rgb(${red},${green},${blue})`;
    };

    //console.log(newColor);

    return (
    <View style={styles.viewStyle}>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={ () => {
                //Alert.alert(dataGenarate());
                setnewColor([...newColor, dataGenarate()]);
            }}>
            <Text style={styles.textStyle}>
                Genarate Random Color
            </Text>
        </TouchableOpacity>
        <View style={styles.flatView}>
            <FlatList 
                data={newColor}
                renderItem={( {item} ) => {
                    return(
                        <View style={styles.imgContainer}>
                            
                            <View
                                style={{
                                backgroundColor: item,
                                width: 300,
                                height: 100,
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: 900,
                                }}>
                                {item}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />
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
    flatView: {
        alignItems: "center",
        marginBottom: 100
    },
    imgContainer: {
        marginVertical: 50,
        paddingHorizontal: 30,
        display: "flex",
        alignSelf: "center"
    },
})

export default RgbComponent;
