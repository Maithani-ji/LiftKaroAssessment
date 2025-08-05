// src/components/AppButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor, borderColor: borderColor ?? 'transparent', borderWidth: borderColor ? 1 : 0 },
      ]}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppButton;
