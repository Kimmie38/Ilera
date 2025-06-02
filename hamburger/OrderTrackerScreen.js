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
                <TouchableOpacity onPress={() => navigation.goBack()}
                   style={styles.backButton} >
                  <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Order Tracker</Text>
                <View style={{ width: 24 }} /> 
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
      <TouchableOpacity style={styles.proceedButton}
       onPress={() => navigation.navigate('Proceed')}>
        <Text style={styles.proceedText}>Proceed to payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
 headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily:'Kodchasan-Bold',
  },
  backButton: {
  width: 35,
  height: 35,
  borderRadius: 30,
  backgroundColor: '#e0e0e0', // ash color
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
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
    paddingVertical: 13,
    borderRadius: 40,
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
