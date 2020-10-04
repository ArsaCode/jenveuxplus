import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import defaultStyles from '../config/styles'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem';
import AppScreen from '../components/AppScreen';

export default function ListingDetailsScreen() {
    return (
        <AppScreen>
            <Image 
            style={styles.image}
            source={require('../assets/ipod.jpg')}
            />
            <AppText style={styles.titleText}>
                Ipod Pro Max
            </AppText>
            <View style={styles.descContainer}>
                <FontAwesome5 name="coins" size={24} color={defaultStyles.colors.white2} />
                <AppText style={styles.descText}>
                Prix : 70€
                </AppText>
            </View>
            <ListItem 
            image={require('../assets/maphoto.png')}
            title="Arsalan G."
            subTitle="5 ventes"
            />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 25,
        width: '100%',
        height: 300,
    },
    descContainer: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    titleText: {
        color: defaultStyles.colors.white,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    descText: {
        color: defaultStyles.colors.white,
        marginLeft: 10,
        fontSize: 20,
    },
})
