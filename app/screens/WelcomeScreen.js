import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.imagebackground} 
        source={require('../assets/welcomescreen.jpg')}
        blurRadius={6}
        width={200}
        height={200}
        >

        <View style={styles.banner}>
        <Image source={require('../assets/logojvp.png')} />
        <Text style={styles.bannertext}>Vendez ce que vous n'utilisez plus.</Text>
        </View>

        <View style={styles.buttons}>
         <View style={styles.loginbutton} />
         <View style={styles.registerbutton} />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imagebackground: {
        flex: 1,
        alignItems: 'center',
    },
    banner: {
        alignItems: 'center',
    },
    bannertext: {
        position: 'absolute',
        top: 150,
        fontSize: 18,
    },
    buttons: {
        position: 'absolute',
        width: '100%',
        bottom: 50,
    },
    loginbutton: {
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.7,
        height: 70,
        backgroundColor: colors.primary,
        marginLeft: 10,
        marginRight: 10,
    },
    registerbutton: {
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.7,
        marginTop: 20,
        height: 70,
        backgroundColor: colors.primary,
        marginLeft: 10,
        marginRight: 10,
    }
})