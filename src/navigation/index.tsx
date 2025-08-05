// src/navigation/index.tsx

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';        // Custom hook to access auth state
import MainNav from './MainNav';                         // Main app navigation (when logged in)
import AuthNav from './AuthNav';                         // Auth screens navigation (login/signup)
import { useTheme } from '../context/ThemeContext';      // Custom hook to access current theme

const AppNavigator = () => {
  const { user, loading } = useAuth();                   // Get user state and loading flag
  const { theme } = useTheme();                          // Get current theme colors

  // Show splash screen while checking auth state
  if (loading) {
    return (
      <View
        style={[
          styles.splashContainer,
          { backgroundColor: theme.colors.background },  // Apply theme-based background
        ]}
      >
        <Image
          source={require('../../assets/icon.png')}       // App logo or splash image
          style={styles.splashImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  // If user exists → go to main app, otherwise → show auth flow
  return user ? <MainNav /> : <AuthNav />;
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});

export default AppNavigator;
