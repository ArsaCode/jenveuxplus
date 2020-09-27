import React from 'react';
import { Platform, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

export default function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.imagebackground} 
        source={require('../assets/welcomescreen.jpg')}
        blurRadius={5}
        width={200}
        height={200}
        >

        <View style={styles.banner}>
        <Image source={require('../assets/logojvp.png')} />
        <Text style={styles.bannertext}>Vendez ce que vous n'utilisez plus</Text>
        </View>

        <View style={styles.buttons}>
         <Button buttonName="Connexion" />
         <Button buttonName="Inscription"/>
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
        fontStyle: 'italic',
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avenir',
        position: 'absolute',
        top: 130,
        fontSize: 18,
    },
    buttons: {
        position: 'absolute',
        justifyContent: 'space-between',
        height: 150,
        width: '100%',
        bottom: 50,
    },
})