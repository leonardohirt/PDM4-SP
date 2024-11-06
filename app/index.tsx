import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';
import { useRouter } from 'expo-router';

// Dados fictícios de exemplo
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

// Função para calcular o total do carrinho
const calculateTotalPrice = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

const totalPrice = calculateTotalPrice();

const CartScreen = () => {
  const router = useRouter();

  // Função para remover um item do carrinho
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

      {/* Rodapé fixo com subtotal, cupom e saldo de moedas */}
      <View style={styles.footer}>
        {/* Seção de Cupons */}
        <View style={styles.couponSection}>
          <TouchableOpacity style={styles.couponButton}>
            <Text style={styles.couponText}>Cupom Shopee</Text>
            <Text style={styles.couponPlaceholder}>Selecione ou insira o código</Text>
          </TouchableOpacity>
        </View>

        {/* Saldo de Moedas */}
        <View style={styles.coinBalanceSection}>
          <Text style={styles.coinBalanceText}>Saldo de moedas insuficiente</Text>
          <Switch disabled={true} value={false} />
        </View>

        <View style={styles.subtotalContainer}>
          <Text style={styles.selectAllText}>Tudo</Text>
          <Text style={styles.subtotalText}>Sub-total</Text>
          <Text style={styles.subtotalValue}>R${totalPrice.toFixed(2)}</Text>

          {/* Botão "Continuar" ao lado do "Sub-total" */}
          <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push("/checkout")}>
            <Text style={styles.checkoutButtonText}>Continuar (1)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Alterado para fundo branco
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Texto preto
    marginBottom: 10,
  },
  cartContent: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9", // Fundo claro para itens
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000", // Sombra para destacar os itens
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    backgroundColor: "#ddd", // Fundo cinza para as imagens
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000", // Texto preto
  },
  priceText: {
    fontSize: 16,
    color: "#333", // Texto mais escuro para preços
  },
  itemQuantity: {
    fontSize: 14,
    color: "#666", // Cor mais suave
    marginTop: 8,
  },
  removeText: {
    fontSize: 14,
    color: "#ff4d4d", // Cor vermelha para remover
    marginTop: 8,
  },
  couponSection: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Linha separadora mais clara
  },
  couponButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  couponText: {
    fontSize: 16,
    color: "#000", // Texto preto
  },
  couponPlaceholder: {
    fontSize: 16,
    color: "#888", // Texto mais claro
  },
  coinBalanceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Linha separadora mais clara
  },
  coinBalanceText: {
    fontSize: 16,
    color: "#000", // Texto preto
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff", // Fundo branco para o rodapé
    borderTopWidth: 1,
    borderTopColor: "#ddd", // Linha separadora mais clara
  },
  subtotalContainer: {
    flexDirection: "row", // Usado para alinhar "Sub-total" e o botão "Continuar" horizontalmente
    alignItems: "center", // Centraliza verticalmente
    marginVertical: 10,
    justifyContent: "space-between", // Espaça adequadamente os itens
  },
  selectAllText: {
    fontSize: 16,
    color: "#000", // Texto preto
    marginRight: 8,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000", // Texto preto
    marginLeft: "auto",
  },
  subtotalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // Cor branca para o valor
    marginRight: 10, // Adiciona espaçamento entre o valor e o botão
  },
  checkoutButton: {
    backgroundColor: "#ff4d4d", // Cor vermelha para o botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10, // Espaçamento entre "Sub-total" e o botão
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // Texto branco no botão
    textAlign: "center",
  },
});

export default CartScreen;