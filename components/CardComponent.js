import React from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'
import AppText from './AppText/AppText'
import colors from '../colors'


function CardComponent({title, subTitle, image} ) {
    
    return(
        <View style={styles.card}>
            <Image source={image} style={styles.img} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    img:{
        width:"100%",
        height:200
    },
    detailsContainer: {
        paddingTop: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.colorRegister,
        fontWeight: "bold"
    }
})

export default CardComponent