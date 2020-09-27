import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, View } from 'react-native';

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
        <Image style={styles.imagelogo} source={require('../assets/logojvp.png')} />
        <View style={styles.buttons}>
         <View style={styles.loginbutton} >
            <Button 
            title="Connexion"
            />
         </View>
         <View style={styles.registerbutton} >
            <Button 
            title="Inscription"
            />
         </View>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imagebackground: {
        flex: 1,
        alignItems: 'center',
    },
    buttons: {
        position: 'absolute',
        bottom: 50,
    },
    loginbutton: {
        backgroundColor: colors.primary,
    },
    registerbutton: {
        backgroundColor: colors.primary,
    }
})