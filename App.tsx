
import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
// Import ThemeProvider and useTheme from our context
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
// Import SafeAreaProvider for React Navigation compatibility and proper layout
import { SafeAreaProvider } from 'react-native-safe-area-context';

// This is a temporary component to demonstrate theme usage.
// In later phases, this will be replaced by your navigation setup.
const ThemedAppContent = () => {
  // Use the custom hook to access theme, isDarkMode, and toggleTheme function
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    // Apply background color from the theme
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Configure StatusBar based on the current theme for better UX */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />

      {/* Welcome Text with themed color and typography */}
      <Text
        style={[
          styles.welcomeText,
          {
            color: theme.colors.text,
            fontSize: theme.typography.fontSizes.large,
            fontWeight: theme.typography.fontWeights.bold,
          },
        ]}
      >
        Welcome to LiftKaro!
      </Text>

      {/* Display current theme status */}
      <Text
        style={[
          styles.themeStatusText,
          {
            color: theme.colors.text,
            fontSize: theme.typography.fontSizes.regular,
          },
        ]}
      >
        Current Theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>

      {/* Button to toggle theme */}
      <TouchableOpacity
       
        onPress={toggleTheme} // Call toggleTheme when pressed
      >
      <Text  style={[
          styles.toggleButton,
          {
            color: theme.colors.primary, // Use primary color for the button
            fontSize: theme.typography.fontSizes.medium,
            fontWeight: theme.typography.fontWeights.semiBold,
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: theme.colors.primary,
            borderRadius: 8,
          },
        ]}> Toggle Theme</Text> 
      </TouchableOpacity>
    </View>
  );
};

// Main App component
export default function App() {
  return (
    // SafeAreaProvider is necessary for react-native-screens and correct layout on notched devices
    <SafeAreaProvider>
      {/* Wrap the entire app content with ThemeProvider */}
      <ThemeProvider>
        <ThemedAppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// Basic styles for the demonstration
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    marginBottom: 10,
  },
  themeStatusText: {
    marginBottom: 20,
  },
  toggleButton: {
    // Styles applied via inline style for demonstration, typically use StyleSheet
  },
});