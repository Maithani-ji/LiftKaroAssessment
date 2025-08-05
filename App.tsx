// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Context providers for global state (auth and theme)
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';

// Root navigation setup
import AppNavigator from './src/navigation/index';

const App = () => {
  return (
    // Ensures UI respects safe areas on different devices
    <SafeAreaProvider>
      {/* Provides authentication context to the app */}
      <AuthProvider>
        {/* Provides theme (dark/light) context to the app */}
        <ThemeProvider>
          {/* Handles navigation across screens */}
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;
