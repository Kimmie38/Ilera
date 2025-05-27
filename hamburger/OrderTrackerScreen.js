import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderTrackerScreen({ navigation }) {
  const [quantity, setQuantity] = useState(2);

  const pricePerUnit = 15000;
  const totalPrice = quantity * pricePerUnit;

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Ilera Health Tracker Version 1.0</Text>
      <Text style={styles.price}>₦15,000.00</Text>
      <Text style={styles.description}>
        Ilera Livestock health tracker is a modern device that monitors your livestock's vital and health data like temperature, 
        heart rate and animal motion and allows you track those information on the mobile app.
      </Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.qtyButton} onPress={decreaseQty}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qtyNumber}>{quantity}</Text>
        <TouchableOpacity style={styles.qtyButtons} onPress={increaseQty}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalPrice}>Total Price: ₦{totalPrice.toLocaleString()}</Text>
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedText}>Proceed to payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
     elevation: 0, // Android shadow
  shadowOpacity: 0,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 10,
  },
  thumbnailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    backgroundColor: '#c4c4c4',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    fontFamily:'Kodchasan-Bold',
  },
  price: {
    fontSize: 16,
    fontWeight:500,
    fontFamily:'Kodchasan-Bold',
    marginTop: 5,
    color: '#000',
  },
  description: {
    marginTop: 8,
    fontSize: 17,
    color: '#555',
    fontFamily:'Kodchasan-Regular',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginTop:'20',
  },
  qtyButton: {
    width: 35,
    height: 35,
    backgroundColor: '#d1d1d1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
   qtyButtons: {
    width: 35,
    height: 35,
    backgroundColor: '#528C4A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily:'Kodchasan-Regular',
  },
  qtyNumber: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    fontFamily:'Kodchasan-Bold',
  },
  proceedButton: {
    backgroundColor: '#528C4A',
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginTop:'30',
  },
  proceedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily:'Kodchasan-Bold',
  },
});
