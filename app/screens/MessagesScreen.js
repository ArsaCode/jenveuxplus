import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import ListItem from '../components/ListItem';
import ListItemDelete from '../components/ListItemDelete';
import ListItemSeparator from '../components/ListItemSeparator';

export default function MessagesScreen() {
    const initialMessages = [
        {
            id: 1,
            title: 'T1',
            description: 'D1',
            image: require('../assets/maphoto.png'),
        },
        {
            id: 2,
            title: 'T2',
            description: 'D2',
            image: require('../assets/maphoto.png'),
        },
        {
            id: 3,
            title: 'T3',
            description: 'D3',
            image: require('../assets/maphoto.png'),
        },
        {
            id: 4,
            title: 'T4',
            description: 'D4',
            image: require('../assets/maphoto.png'),
        },
        {
            id: 5,
            title: 'T5',
            description: 'D5',
            image: require('../assets/maphoto.png'),
        },
        {
            id: 6,
            title: 'T6',
            description: 'D6',
            image: require('../assets/maphoto.png'),
        }
    ];

    const [messages, setMessages] = useState(initialMessages);

    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <AppScreen>
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => <ListItem 
                title={item.title} 
                subTitle={item.description} 
                image={item.image}
                onPress={() => console.log(`Pressed on message ${item.description}`)}
                renderRightActions={() => <ListItemDelete onPress={() => handleDelete(item)} />}
            />}
            ItemSeparatorComponent={() => <ListItemSeparator />}
            refreshing={refreshing}
            onRefresh={() => setMessages(initialMessages)}
        />
        </AppScreen>
    )
}
