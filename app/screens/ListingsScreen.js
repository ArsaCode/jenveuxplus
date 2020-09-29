import React from 'react';
import { FlatList } from 'react-native';

import Card from '../components/Card';
import AppScreen from '../components/AppScreen';
import ListItemSeparator from '../components/ListItemSeparator';

const listings = [
    {
        id: 1,
        title: 'iPod Pro Max',
        price: 70,
        image: require('../assets/ipod.jpg')
    },
    {
        id: 2,
        title: 'iPod Pro Max 2',
        price: 150,
        image: require('../assets/ipod.jpg')
    },
]

export default function ListingsScreen() {
    return (
        <AppScreen>
            <FlatList
                contentContainerStyle={{flexGrow: 1}}
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => <Card
                    title={item.title}
                    subTitle={item.price + '€'}
                    image={item.image}
                /> }
            />
        </AppScreen>
    )
}
