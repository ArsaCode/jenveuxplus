import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import defaultStyles from '../config/styles'

export default function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: defaultStyles.colors.primary,
        paddingTop: Constants.statusBarHeight,
    },
})
