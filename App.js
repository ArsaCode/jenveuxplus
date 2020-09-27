import React from 'react';
import { View } from 'react-native';

import Card from './app/components/Card';
import colors from './app/config/colors';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <ListingDetailsScreen />
  );
}