import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
        <View style={styles.buttons}>
            <AntDesign style={styles.closeicon} name="closecircleo" size={30} color="red" />
            <AntDesign style={styles.downloadicon} name="download" size={30} color="green" />
        </View>
        <View style={styles.imageContainer}>
            <Image
            source={require('../assets/ipod.jpg')}
            resizeMode="stretch"
            style={styles.image}
            borderRadius={25}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    buttons: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    closeicon: {
        left: 10,
        top: 30,
    },
    downloadicon: {
        right: 10,
        top: 30,
    },
    imageContainer: {
        marginTop: 130,
        height: '60%',
        width: '100%',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    }
})
