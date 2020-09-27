import React from 'react';
import { View } from 'react-native';

import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View 
    style={{backgroundColor:'#f8f4f4',
    flex: 1,
    padding: 20,
    paddingTop: 100}}>
      <Card
      title="Ipod Pro Max"
      subTitle="70€"
      image={require("./app/assets/ipod.jpg")}
      />
    </View>
  );
}