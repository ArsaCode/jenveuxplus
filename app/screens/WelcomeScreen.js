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
        <View>
        <Image style={styles.imagelogo} source={require('../assets/logojvp.png')} />
        <Text styles={styles.banner}>Vendez ce que vous n'utilisez plus.</Text>
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
        top: 5,
        color: colors.secondary,
    },
    buttons: {
        position: 'absolute',
        bottom: 50,
    },
    loginbutton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    registerbutton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    }
})