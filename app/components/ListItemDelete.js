import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import defaultStyles from '../config/styles'

export default function ListItemDelete({onPress}) {
    return (
        <TouchableWithoutFeedback 
        onPress={onPress}>
        <View style={styles.container}>
            <FontAwesome name="trash-o" size={24} color={defaultStyles.colors.white} />
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: defaultStyles.colors.danger,
        width: 70,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
