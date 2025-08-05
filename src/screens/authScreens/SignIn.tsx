// src/screens/authScreens/SignIn.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from 'react-native';

import { useAuth } from '../../context/AuthContext';           // Auth context to access signIn
import { useTheme } from '../../context/ThemeContext';         // Theme context for theming & toggle
import { SignInScreenProps } from '../../types/navigation';    // Props type for navigation
import AppButton from '../../components/AppButton';            // Reusable button component

const SignIn: React.FC<SignInScreenProps> = ({ navigation }) => {
  const { signIn } = useAuth();                                // Sign in method from context
  const { theme, toggleTheme, isDarkMode: isDark } = useTheme(); // Theme data and toggle method

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
    
      {/* Toggle for Light/Dark Mode */}
      <View style={styles.themeToggleContainer}>
        <Text style={[styles.toggleText, { color: theme.colors.text }]}>
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* App Logo */}
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.logo}
        />

        {/* Welcome Message */}
        <Text
          style={[
            styles.welcomeText,
            { color: theme.colors.text, fontSize: theme.typography.fontSizes.extraLarge },
          ]}
        >
          Welcome to LiftKaro!
        </Text>

        {/* Promotional Banner */}
        <View style={[styles.banner, { backgroundColor: theme.colors.primary }]}>
          <Text
            style={[
              styles.bannerText,
              { color: theme.colors.card, fontSize: theme.typography.fontSizes.large },
            ]}
          >
            Join your fitness journey today!
          </Text>
        </View>

        {/* Buttons: Sign In, Sign Up, Contact Support */}
        <View style={styles.ctaContainer}>
          {[
            {
              title: 'Sign In',
              onPress: signIn,
              backgroundColor: theme.colors.primary,
              textColor: theme.colors.card,
            },
            {
              title: 'Sign Up',
              onPress: () => navigation.navigate('SignUp'),
              backgroundColor: theme.colors.secondary,
              textColor: theme.colors.card,
            },
            {
              title: 'Contact Support',
              onPress: () => navigation.navigate('ContactSupport'),
              backgroundColor: theme.colors.card,
              textColor: theme.colors.text,
              borderColor: theme.colors.border,
            },
          ].map((btn, index) => (
            <AppButton
              key={index}
              title={btn.title}
              onPress={btn.onPress}
              backgroundColor={btn.backgroundColor}
              textColor={btn.textColor}
              borderColor={btn.borderColor}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.colors.text }]}>
            Terms & Conditions | Empower your fitness journey 🚀
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themeToggleContainer: {
    padding: 12,
    paddingTop: "20%",
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
    marginTop: "20%",
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
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
    textAlign: 'center',
  },
  ctaContainer: {
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
  ctaButton: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default SignIn;
