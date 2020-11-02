import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../colors'
import ListItems from '../components/ListItems'


function ListingDetailsScreen(props) {
    return (
       <View>
           <Image style={styles.image} source={require('./../assets/jacket.jpg')} />
        <View style={styles.detailsComponent}>
            <AppText style={styles.title}>Jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer}>
                <ListItems 
                    image={require("./../assets/ania.jpg")}
                    title="Ania Popowicz"
                    subTitle="5 Listings"
                />
            </View>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    detailsComponent:{
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.colorRegister,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    }, 
    userContainer: {
        marginVertical: 40,
    }


})

export default ListingDetailsScreen;