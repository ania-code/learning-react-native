import React, { useState } from 'react';
import { 
    FlatList, 
    StyleSheet
} from 'react-native';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItems from '../components/ListItems'
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'

const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages)


    const handleDelete = message => {
        //delete the message from messages
        setMessages(messages.filter( m => m.id !== message.id))
        // call the server
    }
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
                renderRightActions={() => (
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}/> 
            )}
            ItemSeparatorComponent={ListItemSeparator}/>
        </Screen>
        
    );
}

const styles = StyleSheet.create({
   
})
export default MessagesScreens;