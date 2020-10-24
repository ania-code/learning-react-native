import React from 'react';
import { StyleSheet, ImageBackground, Text, Image, View } from "react-native";
// @ts-ignore
import backgroundImage from "../assets/background.jpg";
// @ts-ignore
import logo from '../assets/logo-red.png';
import AppButton from '../components/AppButton'

export default function WelcomeScreen() {

    return (
        <ImageBackground
            blurRadius={10}
            source={backgroundImage}
            style={styles.backgroundImage} >
            <View style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo} />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" color='colorLogin'></AppButton>
                <AppButton title="Register" color='colorRegister'></AppButton>
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
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 10,
    },
    buttonsContainer: {
        paddingTop:20,
        width: "100%"
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