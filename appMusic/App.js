import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './pages/Routes';

export default function App() {
  return (
    <>
    <StatusBar hidden={false}/>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </>
  );
}