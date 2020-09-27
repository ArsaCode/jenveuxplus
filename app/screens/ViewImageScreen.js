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
    image: {
        width: '100%',
        height: '100%',
    }
})
