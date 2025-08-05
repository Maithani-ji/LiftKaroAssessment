// src/screens/authScreens/AuthLandingPage.tsx

import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { AuthLandingScreenProps } from '../../types/navigation'; // Navigation prop type
import { useTheme } from '../../context/ThemeContext';            // Access current theme

const AuthLandingPage: React.FC<AuthLandingScreenProps> = ({ navigation }) => {
  const { theme } = useTheme(); // Destructure theme

  // Navigate to SignIn screen after 1 second
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 1000);
    return () => clearTimeout(timeout); // Cleanup timer
  }, [navigation]);

  const { colors, typography } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* App Logo */}
      <Image
        source={require('../../../assets/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Welcome Text */}
      <Text
        style={{
          color: colors.text,
          fontSize: typography.fontSizes.large,
          fontWeight: typography.fontWeights.semiBold,
          marginTop: 32,
          fontFamily: typography.fontFamilies.regular,
        }}
      >
        Welcome to LiftKaro
      </Text>
    </View>
  );
};

export default AuthLandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',       // Center horizontally
    justifyContent: 'center',   // Center vertically
    padding: 24,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});
