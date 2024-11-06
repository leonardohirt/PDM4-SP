import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CheckoutButtonProps {
  onPress: () => void;
  text?: string;
  customTitle?: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ text="Checkout", onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF3B30', // Cor alterada para combinar com o tema
    paddingVertical: 16,
    borderRadius: 4,
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
