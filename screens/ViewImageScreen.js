import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import chair from '../assets/chair.jpg'

export default function ViewImageScreen() {

    return(
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 40, marginHorizontal: 30}}>
                <View style={{ width: 50, height:50, backgroundColor: "#fc5c65"}}></View>
                <View style={{  width: 50, height:50, backgroundColor: "#4ECDC4"}}></View>
            </View>
            <ImageBackground
                style={styles.backgroundImage}
                source={chair}></ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal: 10
    },
    backgroundImage: {
        flex:2,
        flexDirection: "column",
        width: "100%",
        height: 560,
        marginBottom: 400
    }
})