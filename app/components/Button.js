import React from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors'

export default function Button({buttonName}) {
    return (
        <View style={styles.buttonStyle}>
            {
                buttonName === "Connexion" ?
                <AntDesign name="login" size={24} color="white" />
                :
                <AntDesign name="form" size={24} color="white" />
            }
            <Text style={styles.buttonText}>{buttonName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.6,
        height: 70,
        backgroundColor: colors.primary,
        marginLeft: 10,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 24,
        marginLeft: 10,
        color: colors.white,
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avenir',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
    }
})
