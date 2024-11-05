import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface PriceTagProps {
  price: string;
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
  return <Text style={styles.price}>R${price}</Text>;
};

const styles = StyleSheet.create({
  price: {
    color: '#FF3B30',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PriceTag;