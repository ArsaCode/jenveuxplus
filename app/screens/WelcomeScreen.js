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
        top: 0,
        fontSize: 20,
    },
    buttons: {
        position: 'absolute',
        width: '100%',
        bottom: 50,
    },
    loginbutton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    registerbutton: {
        marginTop: 20,
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    }
})