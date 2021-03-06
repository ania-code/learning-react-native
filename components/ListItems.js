import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText/AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../colors'

function ListItems({title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.gray}
                onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image}></Image>
                        <View>
                            <AppText style={styles.title}>{title}</AppText>
                            <AppText style={styles.subTitle}>{subTitle}</AppText>
                        </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
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