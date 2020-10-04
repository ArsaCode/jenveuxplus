import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import AppScreen from '../components/AppScreen';
import defaultStyles from '../config/styles';

export default function ViewImageScreen() {
    return (
        <AppScreen>
        <View style={styles.buttons}>
            <AntDesign style={styles.closeicon} name="closecircleo" size={30} color={defaultStyles.colors.danger} />
            <AntDesign style={styles.downloadicon} name="download" size={30} color={defaultStyles.colors.success} />
        </View>
        <View style={styles.imageContainer}>
            <Image
            source={require('../assets/ipod.jpg')}
            resizeMode="cover"
            style={styles.image}
            borderRadius={25}
            />
        </View>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
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
