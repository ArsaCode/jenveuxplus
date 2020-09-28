import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Icon({
    name,
    size,
    backgroundColor,
    iconColor
}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <AntDesign name={name} size={size * 0.5} color={iconColor} />
        </View>
    )
}

const styles = StyleSheet.create({
})
