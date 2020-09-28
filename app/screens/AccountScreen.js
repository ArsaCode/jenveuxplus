import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import ListItemSeparator from '../components/ListItemSeparator';
import AppIcon from '../components/AppIcon'
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const menuItems = [
    {
        title: "Ventes en cours",
        icon: {
            name: "bars",
            size: 70,
            backgroundColor: colors.primary2,
            iconColor: colors.white,
        }
    },
    {
        title: "Messages",
        icon: {
            name: "mail",
            size: 70,
            backgroundColor: colors.success,
            iconColor: colors.white,
        }
    }
]

export default function AccountScreen() {
    return (
        <AppScreen>
            <View style={styles.container}>
                <ListItem 
                title="Arsalan Ghassemi"
                subTitle="contact@arsadevs.com"
                image={require('../assets/maphoto.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                renderItem={({item}) =>
                <ListItem
                    title={item.title}
                    ImageComponent={
                        <AppIcon name={item.icon.name} size={item.icon.size} iconColor={item.icon.iconColor} backgroundColor={item.icon.backgroundColor} />
                    }/>
                }
                ItemSeparatorComponent={() => <ListItemSeparator /> }
                />
            </View>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.primarylight,
        marginVertical: 20,
    }
})
