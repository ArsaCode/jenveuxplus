import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import ListItemSeparator from '../components/ListItemSeparator';
import AppIcon from '../components/AppIcon'
import ListItem from '../components/ListItem';
import defaultStyles from '../config/styles';

const menuItems = [
    {
        title: "Ventes en cours",
        icon: {
            name: "bars",
            size: 70,
            backgroundColor: defaultStyles.colors.primary2,
            iconColor: defaultStyles.colors.white,
        }
    },
    {
        title: "Messages",
        icon: {
            name: "mail",
            size: 70,
            backgroundColor: 'tomato',
            iconColor: defaultStyles.colors.white,
        }
    },
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
                    IconComponent={
                        <AppIcon name={item.icon.name} size={item.icon.size} iconColor={item.icon.iconColor} backgroundColor={item.icon.backgroundColor} />
                    }/>
                }
                ItemSeparatorComponent={() => <ListItemSeparator /> }
                />
            </View>
            <View style={styles.container}>
                <ListItem 
                title="Se déconnecter"
                IconComponent={
                    <AppIcon
                    name="logout"
                    size={70}
                    backgroundColor={defaultStyles.colors.danger}
                    iconColor={defaultStyles.colors.white}
                    />
                }
                />
            </View>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.primarylight,
        marginVertical: 20,
    }
})
