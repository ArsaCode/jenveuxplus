import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors'
import AppText from './AppText';

export default function AppButton({buttonName, onPress, color}) {
    return (
        <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: colors[color]}]} onPress={onPress}>
            {
                buttonName === "Connexion" ?
                <AntDesign name="login" size={24} color="white" />
                :
                <AntDesign name="form" size={24} color="white" />
            }
            <AppText style={styles.buttonText}>{buttonName}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.6,
        height: 70,
        marginLeft: 10,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 24,
        marginLeft: 10,
        color: colors.white,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
    }
})
