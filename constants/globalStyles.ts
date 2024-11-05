import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  cardArrow: {
    fontSize: 18,
    color: '#333',
    marginLeft: 'auto',
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  shippingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  shippingDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;
