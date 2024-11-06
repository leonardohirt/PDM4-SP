import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';
import { useRouter } from 'expo-router';
const cartItems = [
  {
    id: '1',
    name: 'Adaptador SATA para USB 3.0',
    imageUrl: 'https://via.placeholder.com/150',
    price: 19.6,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Carenagem Tampa Capa Motor',
    imageUrl: 'https://via.placeholder.com/150',
    price: 59.41,
    quantity: 1,
  },
];

const calculateTotalPrice = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

const totalPrice = calculateTotalPrice();

const CartScreen = () => {
  const router = useRouter();

  const handleRemoveItem = (itemId: string) => {
    console.log(`Removendo item com id: ${itemId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <ScrollView style={styles.cartContent}>
        {/* Produtos */}
        {cartItems.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.priceText}>R${item.price.toFixed(2)}</Text>
              <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
     
        <View style={styles.couponSection}>
          <TouchableOpacity style={styles.couponButton}>
            <Text style={styles.couponText}>Cupom Shopee</Text>
            <Text style={styles.couponPlaceholder}>Selecione ou insira o código</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.coinBalanceSection}>
          <Text style={styles.coinBalanceText}>Saldo de moedas insuficiente</Text>
          <Switch disabled={true} value={false} />
        </View>

        <View style={styles.subtotalContainer}>
          <Text style={styles.selectAllText}>Tudo</Text>
          <Text style={styles.subtotalText}>Sub-total: </Text>
          <Text style={styles.subtotalValue}>R${totalPrice.toFixed(2)}</Text>

          <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push("/checkout")}>
            <Text style={styles.checkoutButtonText}>Continuar (2)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", 
    marginBottom: 10,
  },
  cartContent: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9", 
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    backgroundColor: "#ddd", 
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000", 
  },
  priceText: {
    fontSize: 16,
    color: "#333", 
  },
  itemQuantity: {
    fontSize: 14,
    color: "#666", 
    marginTop: 8,
  },
  removeText: {
    fontSize: 14,
    color: "#ff4d4d", 
    marginTop: 8,
  },
  couponSection: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", 
  },
  couponButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  couponText: {
    fontSize: 16,
    color: "#000", 
  },
  couponPlaceholder: {
    fontSize: 16,
    color: "#888", 
  },
  coinBalanceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", 
  },
  coinBalanceText: {
    fontSize: 16,
    color: "#000", 
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd", 
  },
  subtotalContainer: {
    flexDirection: "row", 
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between", 
  },
  selectAllText: {
    fontSize: 16,
    color: "#000", 
    marginRight: 8,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000", 
    marginLeft: "auto",
  },
  subtotalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff4d4d", 
    marginRight: 0.1, 
  },
  checkoutButton: {
    backgroundColor: "#ff4d4d", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10, 
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", 
    textAlign: "center",
  },
});

export default CartScreen;