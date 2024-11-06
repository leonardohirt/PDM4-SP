import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type HeaderWithTitleProps = {
  title: string;
  edit?: string; 
  onEditPress?: () => void;
};

export default function HeaderWithTitle({ title, edit, onEditPress }: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        title,
        headerRight: () => (
          <View style={styles.right}>
            {edit && onEditPress && (
              <TouchableOpacity onPress={onEditPress} accessible={true} accessibilityLabel="Editar">
                <Text style={styles.editText}>{edit}</Text>
              </TouchableOpacity>
            )}
          </View>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  editText: {
    fontWeight: "bold",
    color: "#FF3B30", 
  },
});