import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import HeaderAndTab from './HeaderAndTab';

// Import your SVG icons (adjust the path if necessary)
import HomeIcon from './assets/icons/home.svg';
import VetIcon from './assets/icons/vet.svg';
import VideosIcon from './assets/icons/resources.svg';
import ProfileIcon from './assets/icons/profile.svg';

export default function RegisterScreen() {
  const [category, setCategory] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [sensorId, setSensorId] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log('Animal Registered');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderAndTab
        onMenuPress={() => console.log('Menu clicked')}
        onBellPress={() => console.log('Bell clicked')}
        activeTab="Home"
        onTabPress={(tab) => console.log(`${tab} tab clicked`)}
      />

      {/* TouchableWithoutFeedback dismisses keyboard when tapping outside inputs */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
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

            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('DashboardScreen')}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      {/* TabBar */}
      <View style={styles.tabBar}>
        {[
          { name: 'Home', Icon: HomeIcon },
          { name: 'Vet', Icon: VetIcon },
          { name: 'Videos', Icon: VideosIcon },
          { name: 'Profile', Icon: ProfileIcon },
        ].map(({ name, Icon }) => (
          <TouchableOpacity key={name} onPress={() => console.log(`${name} tab clicked`)} style={styles.tabItem}>
            <Icon width={24} height={24} fill={name === 'Home' ? 'green' : 'gray'} />
            <Text style={[styles.tabLabel, { color: name === 'Home' ? 'green' : 'gray' }]}>{name}</Text>
          </TouchableOpacity>
        ))}
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
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Adding space for the bottom TabBar
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
  tabBar: {
    flexShrink: 0, // Ensures the tab bar doesn't shrink
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 12,
    marginTop: 2,
  },
});
