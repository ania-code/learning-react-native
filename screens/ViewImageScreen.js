import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import chair from '../assets/chair.jpg'

export default function ViewImageScreen() {

    return(
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image 
                resizeMode="contain"
                source={chair}
                style={styles.backgroundImage}> 
            </Image>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex:1
    },
    closeIcon: {
        width: 50,
        height:50,
        backgroundColor: '#fc5c65',
        position:'absolute',
        top: 40,
        left: 40
    },
    deleteIcon: {
        width: 50,
        height:50,
        backgroundColor: '#4ECDC4',
        position:'absolute',
        top: 40,
        right: 40
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    }
})

// KOCHAM MOJĄ ANIĘ
// JESTEM Z NIEJ MEGA DUMNY