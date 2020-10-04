import React from 'react'
import { StyleSheet, View } from 'react-native'
import defaultStyles from '../config/styles'

export default function ListItemSeparator() {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: defaultStyles.colors.secondary,
    }
})
