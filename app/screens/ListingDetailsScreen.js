import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image 
            style={styles.image}
            source={require('../assets/ipod.jpg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    }
})
