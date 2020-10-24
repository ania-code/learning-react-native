import React from 'react';
import { StyleSheet, ImageBackground, Text, Image, View } from "react-native";
// @ts-ignore
import backgroundImage from "../assets/background.jpg";
// @ts-ignore
import logo from '../assets/logo-red.png';
export default function WelcomeScreen() {

    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage} >
            <View style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo} />
                <Text>Sell What You Don't Need</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    container: {
        position:"absolute",
        top: 70,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100
    },
})