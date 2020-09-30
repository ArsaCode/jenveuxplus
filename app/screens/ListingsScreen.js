import React from 'react';

import Card from '../components/Card';
import AppScreen from '../components/AppScreen';

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
            {listings.map((item, key) => (
                <Card
                key={key} 
                title={item.title}
                subTitle={item.price + '€'}
                image={item.image}
                />
            ))}
        </AppScreen>
    )
}
