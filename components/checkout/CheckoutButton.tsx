// CheckoutButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CheckoutButtonProps {
  text: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF3B30',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutButton;
