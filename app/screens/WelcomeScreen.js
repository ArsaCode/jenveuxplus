import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

export default function WelcomeScreen() {
    return (
        <ImageBackground 
        style={styles.imageBackground} 
        source={require('../assets/welcomescreen.jpg')}
        blurRadius={5}
        width={200}
        height={200}
        >

        <View style={styles.banner}>
        <Image source={require('../assets/logojvp.png')} />
        <AppText style={styles.bannerText}>Vendez ce que vous n'utilisez plus</AppText>
        </View>

        <View style={styles.buttons}>
         <AppButton buttonName="Connexion" color="primary" onPress={() => console.log("login")} />
         <AppButton buttonName="Inscription" color="primary2" onPress={() => console.log("register")}/>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        alignItems: 'center',
    },
    banner: {
        alignItems: 'center',
    },
    bannerText: {
        fontStyle: 'italic',
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