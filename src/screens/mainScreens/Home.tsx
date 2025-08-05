// src/screens/mainScreens/Home.tsx

import React from 'react';
import {
  View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView, Switch,
} from 'react-native';

import { useAuth } from '../../context/AuthContext';             // For signOut
import { useTheme } from '../../context/ThemeContext';           // For theme handling
import { HomeScreenProps, HomeScreenRoute } from '../../types/navigation';
import AppButton from '../../components/AppButton';              // Reusable button component

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { signOut } = useAuth();                                 // Logout function
  const { theme, toggleTheme, isDarkMode: isDark } = useTheme(); // Theme and toggle

  // Define navigation buttons shown on home screen
  const homeButtons: {
    title: string;
    screen: HomeScreenRoute;
    backgroundColor: string;
    textColor: string;
    borderColor?: string;
  }[] = [
    {
      title: 'My Profile',
      screen: 'Profile',
      backgroundColor: theme.colors.primary,
      textColor: theme.colors.card,
    },
    {
      title: 'Explore Services',
      screen: 'Explore',
      backgroundColor: theme.colors.secondary,
      textColor: theme.colors.card,
    },
    {
      title: 'View API Posts',
      screen: 'Posts',
      backgroundColor: theme.colors.card,
      textColor: theme.colors.notification,
      borderColor: theme.colors.notification,
    },
    {
      title: 'Find Gyms on Map',
      screen: 'Gyms',
      backgroundColor: '#4285F4',
      textColor: theme.colors.card,
      borderColor: '#4285F4',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Dark/Light Mode Toggle */}
        <View style={styles.themeToggleContainer}>
          <Text style={[styles.toggleText, { color: theme.colors.text }]}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </Text>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>

        {/* App Logo */}
        <Image
          source={{ uri: 'https://placehold.co/100x100/A0B2C9/000000?text=Logo' }}
          style={styles.logo}
        />

        {/* Welcome Text */}
        <Text style={[
          styles.welcomeText,
          { color: theme.colors.text, fontSize: theme.typography.fontSizes.extraLarge },
        ]}>
          Welcome to LiftKaro!
        </Text>

        {/* Promotional Banner */}
        <View style={[styles.banner, { backgroundColor: theme.colors.primary }]}>
          <Text style={[
            styles.bannerText,
            { color: theme.colors.card, fontSize: theme.typography.fontSizes.large },
          ]}>
            Your Journey Starts Here
          </Text>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.ctaContainer}>
          {homeButtons.map((btn, index) => (
            <AppButton
              key={index}
              title={btn.title}
              onPress={() => navigation.navigate(btn.screen)}
              backgroundColor={btn.backgroundColor}
              textColor={btn.textColor}
              borderColor={btn.borderColor}
            />
          ))}
        </View>

        {/* Footer with Sign Out */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.colors.text }]}>
            © 2025 LiftKaro. All rights reserved.
          </Text>
          <Button title="Sign Out" onPress={signOut} />
        </View>

      </ScrollView>
    </View>
  );
};

// StyleSheet for the Home screen layout and UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  bannerText: {
    fontWeight: 'bold',
  },
  ctaContainer: {
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 12,
    marginBottom: 10,
  },
  themeToggleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  toggleText: {
    marginRight: 10,
    fontSize: 14,
  },
});

export default Home;
