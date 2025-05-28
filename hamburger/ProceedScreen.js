import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';


export default function ProceedScreen({ navigation }) {
  const [form, setForm] = useState({
    name: '',
    city: '',
    lga: '',
    address: '',
    phone: '',
  });
  const [saveInfo, setSaveInfo] = useState(false);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Tracker</Text>
      </View>

      <Text style={styles.subText}>please fill the form below so we can get your location to deliver the tracker.</Text>

      {/* Form Fields */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={form.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Town/City"
        value={form.city}
        onChangeText={(text) => handleChange('city', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Local Government Area"
        value={form.lga}
        onChangeText={(text) => handleChange('lga', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Home Address"
        value={form.address}
        onChangeText={(text) => handleChange('address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => handleChange('phone', text)}
      />

      {/* Checkbox */}
       
       <View style={styles.checkboxContainer}>
            <Checkbox
        value={saveInfo}
        onValueChange={setSaveInfo}
        color={saveInfo ? '#528C4A' : undefined}  // optional nice color
        />
    <Text style={styles.checkboxLabel}>Save this information for check-out next time</Text>
        </View>

      {/* Button */}
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedText}>Proceed to payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
 headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily:'Kodchasan-Bold',
    marginRight:100,
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
  subText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    marginTop: 5,
    fontFamily: 'Kodchasan-Regular',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 25,
    fontSize: 15,
    fontFamily: 'Kodchasan-Regular',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Kodchasan-Regular',
  },
  proceedButton: {
    backgroundColor: '#528C4A',
    paddingVertical: 16,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 25,
  },
  proceedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Kodchasan-Bold',
  },
});
