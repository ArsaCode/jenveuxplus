import React from 'react'
import { StyleSheet, Platform ,Text, ImagePropTypes } from 'react-native'

export default function AppText({children, style}) {
    return (
        <Text style={[styles.appText, style]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    appText: {
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avenir', 
    }
})
