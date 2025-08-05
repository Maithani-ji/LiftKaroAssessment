// src/navigation/AuthNav.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/authScreens/SignIn';
import SignUp from '../screens/authScreens/SignUp';
import { AuthStackParamList } from '../types/navigation';
import AuthLandingPage from '../screens/authScreens/AuthLandingPage';
import ContactSupport from '../screens/authScreens/ContactSupport';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Landing" component={AuthLandingPage} />
    <Stack.Screen name="ContactSupport" component={ContactSupport}  options={{headerShown: true}} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNav;
