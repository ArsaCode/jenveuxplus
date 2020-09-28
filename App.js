import React from 'react';

import AppScreen from './app/components/AppScreen';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <AppScreen>
      <ListItem title="My title" subTitle="Subtitle" />
    </AppScreen>
  );
}