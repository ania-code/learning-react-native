import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText/AppText'
import colors from '../colors'

function ListItems({title, subTitle, image}) {
    return (
       <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.gray
    }
})

export default ListItems;