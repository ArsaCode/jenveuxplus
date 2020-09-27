import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function ViewImageScreen() {
    return (
        <Image
        resizeMode="contain"
        style={styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    }
})
