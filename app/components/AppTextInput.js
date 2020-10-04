import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import defaultStyles from '../config/styles'

export default function AppTextInput({icon, placeholder}) {
    return (
        <View style={styles.container}>
            {icon && <AntDesign 
            name={icon}
            size={24}
            color="black"
            style={styles.icon}
            />}
            <TextInput 
            style={styles.textInput}
            placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: defaultStyles.colors.white2,
        flexDirection: 'row',
        borderRadius: 25,
        width: '95%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avenir',
    }
})
