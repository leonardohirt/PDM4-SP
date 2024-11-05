import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface CardProps {
  onPress?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ onPress, children, style }) => {
  if (onPress) {
    return (
      <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});

export default Card;
