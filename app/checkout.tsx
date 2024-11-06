import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import FullScreen from "@/components/containers/FullScreen";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card";

const CheckoutScreen = () => {
  const cartItems = [
    { id: 1, name: "Mouse sem fio", price: 119, quantity: 1 },
    { id: 2, name: "Teclado", price: 119, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = () => {
    Alert.alert("Pedido realizado!", `O total do pedido foi R$${totalPrice}`);
  };

  return (
    <FullScreen center={true}>
      <HeaderWithTitle title="Finalizar Pedido" />
      
      <Card title="Resumo do Pedido">
        <View style={styles.cardContent}>
          {cartItems.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Text>{item.name} (x{item.quantity})</Text>
              <PriceTag price={item.price * item.quantity} />
            </View>
          ))}
        </View>
      </Card>

      <View style={styles.totalContainer}>
        <Text>Total:</Text>
        <PriceTag price={totalPrice} />
      </View>

      <Button title="Finalizar Compra" onPress={handleOrder} />
    </FullScreen>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});

export default CheckoutScreen;