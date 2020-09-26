import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.imagebackground} source={require('../assets/welcomescreen.jpg')}>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imagebackground: {
        flex: 1,
    },
})
