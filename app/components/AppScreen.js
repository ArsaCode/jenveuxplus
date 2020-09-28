import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import colors from '../config/colors'

export default function AppScreen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: Constants.statusBarHeight,
    },
})
