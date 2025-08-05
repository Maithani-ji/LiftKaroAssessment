// src/navigation/MainNav.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/mainScreens/Home';
import Explore from '../screens/mainScreens/Explore';
import Profile from '../screens/mainScreens/Profile';
import ContactSupport from '../screens/authScreens/ContactSupport';

import { MainStackParamList } from '../types/navigation';
import PostsScreen from '../screens/mainScreens/PostScreens';
import GymsScreen from '../screens/mainScreens/GymScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Posts" component={PostsScreen} />
      <Stack.Screen name="Gyms" component={GymsScreen} />
    </Stack.Navigator>
  );
};

export default MainNav;
