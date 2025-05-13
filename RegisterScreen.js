import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HeaderAndTab from './HeaderAndTab'; // adjust path if needed

export default function RegisterScreen() {
  const [category, setCategory] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [sensorId, setSensorId] = useState('');
  const [age, setAge] = useState('');

  const handleRegister = () => {
    console.log('Animal Registered');
  };

  return (
    <View style={styles.container}>
      {/* Header and Tab */}
      <HeaderAndTab
        onMenuPress={() => console.log('Hamburger clicked')}
        onBellPress={() => console.log('Bell clicked')}
        activeTab="Home"
        onTabPress={(tab) => console.log(`${tab} tab clicked`)}
      />

      <View style={styles.formContainer}>
        <Text style={styles.label}>Animal Category</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Select Category" value="" />
            <Picker.Item label="Cattle" value="cattle" />
            <Picker.Item label="Goat" value="goat" />
            <Picker.Item label="Sheep" value="sheep" />
          </Picker>
        </View>

        <Text style={styles.label}>Animal Breed</Text>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={breed}
            onValueChange={(itemValue) => setBreed(itemValue)}
          >
            <Picker.Item label="Select Breed" value="" />
            <Picker.Item label="Local" value="local" />
            <Picker.Item label="Exotic" value="exotic" />
          </Picker>
        </View>

        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity onPress={() => setGender('male')} style={styles.genderOption}>
            <View style={[styles.radioCircle, gender === 'male' && styles.selectedRadio]} />
            <Text style={styles.genderLabel}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setGender('female')} style={styles.genderOption}>
            <View style={[styles.radioCircle, gender === 'female' && styles.selectedRadio]} />
            <Text style={styles.genderLabel}>Female</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Tag Number</Text>
        <TextInput
          style={styles.input}
          value={tagNumber}
          onChangeText={setTagNumber}
          placeholder="Enter Tag Number"
        />

        <Text style={styles.label}>Sensor ID Number</Text>
        <TextInput
          style={styles.input}
          value={sensorId}
          onChangeText={setSensorId}
          placeholder="Enter Sensor ID"
        />

        <Text style={styles.label}>Animal's Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Enter Age"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontFamily: 'Kodchasan-Bold',
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#37833b',
    marginRight: 8,
  },
  selectedRadio: {
    backgroundColor: '#37833b',
  },
  genderLabel: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 14,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    fontFamily: 'Kodchasan-Regular',
  },
  registerButton: {
    backgroundColor: '#37833b',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontFamily: 'Kodchasan-Regular',
    fontSize: 14,
    fontWeight: '600',
  },
});
