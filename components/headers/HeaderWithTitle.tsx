// HeaderWithTitle.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderWithTitleProps {
  title: string;
  onBackPress: () => void;
}

const HeaderWithTitle: React.FC<HeaderWithTitleProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress}>
        <Text style={styles.backButton}>{"< Voltar"}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    color: '#007BFF',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HeaderWithTitle;
