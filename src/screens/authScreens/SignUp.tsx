// src/screens/authScreens/SignUp.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { SignUpScreenProps } from '../../types/navigation';
import { useTheme } from '../../context/ThemeContext';


const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const { signUp } = useAuth();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
     

      <Text style={[styles.title, { color: theme.colors.text }]}>Sign Up</Text>

      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={signUp} color={theme.colors.primary} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Sign In"
          onPress={() => navigation.navigate('SignIn')}
          color={theme.colors.primary}
        />
      </View>
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
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
  },
});

export default SignUp;
