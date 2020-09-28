import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.listContainer}>
            <Image
            style={styles.image}
            source={image}
            />
            <View style={styles.descContainer}>
                <AppText style={styles.descHead}>{title}</AppText>
                <AppText style={styles.descSub}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
        borderRadius: 35,
        width: 70,
        height: 70,
    },
    descContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    descHead: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '500',
    },
    descSub: {
        color: colors.white2,
        fontSize: 15,
    }
})
