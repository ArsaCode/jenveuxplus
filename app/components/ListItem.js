import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.primarylight} onPress={onPress}>
            <View style={styles.listContainer}>
                    {image && <Image
                    style={styles.image}
                    source={image}
                    />}
                    <View style={styles.descContainer}>
                        <AppText style={styles.descHead}>{title}</AppText>
                        <AppText style={styles.descSub}>{subTitle}</AppText>
                    </View>
            </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 5,
        paddingLeft: 10,
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
