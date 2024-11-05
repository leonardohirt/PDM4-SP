import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Scrollable from '../containers/Scrollable';
import HeaderWithTitle from '../headers/HeaderWithTitle';
import Card from '../containers/Card'; 
import CheckoutButton from './CheckoutButton';
import PriceTag from './PriceTag';
import { styles } from '../../constants/globalStyles';

const CheckoutScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Scrollable style={styles.container}>
      <HeaderWithTitle title="Comprar" onBackPress={() => navigation.goBack()} />

      <Card onPress={() => navigation.navigate('AddressScreen' as never)}>
        <View style={styles.cardContent}>
          <Text style={styles.cardIcon}>📍</Text>
          <Text style={styles.cardText}>Endereço de entrega</Text>
          <Text style={styles.cardArrow}></Text>
        </View>
      </Card>

      <Card>
        <View style={styles.productRow}>
          <Image source={{ uri: 'URL_DA_IMAGEM' }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Adaptador SATA Para USB 3.0</Text>
            <Text style={styles.productSubtitle}>Variação: Sata para USB3.0</Text>
            <PriceTag price="19,60" />
          </View>
        </View>
      </Card>

      <Card>
        <Text style={styles.shippingTitle}>Opção de Envio</Text>
        <Text style={styles.shippingDetails}>Expresso padrão - Receba entre 7 e 18 de nov</Text>
        <PriceTag price="17,00" />
      </Card>

      <Card>
        <View style={styles.row}>
          <Text>Imposto de Importação:</Text>
          <PriceTag price="7,32" />
        </View>
        <View style={styles.row}>
          <Text>ICMS:</Text>
          <PriceTag price="9,00" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total do Pedido (1 item):</Text>
          <PriceTag price="53,06" />
        </View>
      </Card>

      <CheckoutButton text="FAZER PEDIDO" />
    </Scrollable>
  );
};

export default CheckoutScreen;

