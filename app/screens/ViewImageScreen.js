import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
        <View style={styles.buttons}>
            <View style={styles.closeicon} />
            <View style={styles.deleteicon} />
        </View>
        <Image
        source={require('../assets/ipod.jpg')}
        resizeMode='contain'
        style={styles.image}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
    },
    buttons: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    closeicon: {
        borderRadius: 15,
        left: 10,
        top: 10,
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
    },
    deleteicon: {
        borderRadius: 15,
        right: 10,
        top: 10,
        width: 50,
        height: 50,
        backgroundColor: 'tomato',
    },
    image: {
        width: '100%',
        height: '100%',
    }
})
