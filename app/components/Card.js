import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.titleText}>{title}</AppText>
            <AppText style={styles.descText}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    titleText: {
        fontSize: 22,
        marginBottom: 10,
    },
    descText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
    }
})
