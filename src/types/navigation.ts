// src/types/navigation.ts

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the stack navigator for authentication flow
export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ContactSupport: undefined;
  Landing: undefined;
};
export type HomeScreenRoute = 'Profile' | 'Explore' | 'Posts' | 'Gyms';

// Define the stack navigator for the main application flow
export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  Explore: undefined;
  Posts: undefined;
  Gyms: undefined; // Add the new Gyms screen
};

// Define props for a single screen in the auth stack
export type SignInScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;
export type SignUpScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;
export type AuthLandingScreenProps = NativeStackScreenProps<AuthStackParamList, 'Landing'>;
export type ContactSupportScreenProps = NativeStackScreenProps<AuthStackParamList, 'ContactSupport'>;

// Define props for a single screen in the main stack
export type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>;
export type ProfileScreenProps = NativeStackScreenProps<MainStackParamList, 'Profile'>;
export type ExploreScreenProps = NativeStackScreenProps<MainStackParamList, 'Explore'>;
export type PostsScreenProps = NativeStackScreenProps<MainStackParamList, 'Posts'>;
export type GymsScreenProps = NativeStackScreenProps<MainStackParamList, 'Gyms'>; // Add the new type
