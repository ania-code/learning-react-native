import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import chair from '../assets/chair.jpg'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ViewImageScreen() {

    return(
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
            </View>
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
       
        position:'absolute',
        top: 40,
        left: 40
    },
    deleteIcon: {
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