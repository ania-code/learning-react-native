import React from 'react';
import { 
    FlatList, 
    StyleSheet,
    View
} from 'react-native';
import ListItems from '../components/ListItems'
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/ania.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/ania.jpg')
    }
]

function MessagesScreens(props) {
    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => (
                <ListItems
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log("clicked", item)}
                /> 
            )}
            ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
        
    );
}

const styles = StyleSheet.create({
   
})
export default MessagesScreens;