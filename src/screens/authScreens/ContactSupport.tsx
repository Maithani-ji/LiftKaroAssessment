// src/screens/mainScreens/ContactSupport.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { ContactSupportScreenProps } from '../../types/navigation';

const ContactSupport: React.FC<ContactSupportScreenProps> = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Contact Support
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.text }]}>
        For any help, please email us at support@example.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ContactSupport;
