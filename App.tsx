import React from 'react';

import { Routes } from './src/screens';

import { 
  Roboto_400Regular, 
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import theme from './src/theme/theme';
import { AuthProvider } from './src/hooks/auth';
import { FavoriteMessagesProvider } from './src/hooks/favorites';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <FavoriteMessagesProvider>
        <ThemeProvider theme={theme}>
            <StatusBar
              style="light"
              translucent
              backgroundColor="transparent"
            />
            <Routes />
        </ThemeProvider>
      </FavoriteMessagesProvider>
    </AuthProvider>
  );
}
