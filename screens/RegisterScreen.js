import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HeaderAndTab from './HeaderAndTab'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TabBar from './TabBar';
import api from '../utils/api'


export default function RegisterScreen({ navigation }) {
  const [category, setCategory] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [sensorId, setSensorId] = useState('');
  const [age, setAge] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [loading, setLoading] = useState(false);

 
const handleAnimalRegister = async () => {
  try {
    const payload = {
      category,
      breed,
      tag_id: tagNumber,
      gender: gender.toUpperCase(),
      age: parseInt(age), // convert to number
      sensor_id: sensorId,
    };

    const response = await api.post('livestock/', payload);
    console.log('Animal registered successfully:', response.data);

    navigation.navigate('DashboardScreen', {
  newAnimal: {
    id: 'some-unique-id',
    type: 'Cattle',          // match filter names exactly
    tag_id: 'tag-001',       // full tag id string
    temp: '36.5',            // example
    motion: 'Active',
    heart: '75',
  }
});

  } catch (error) {
    console.error('Error registering animal:', error.response?.data || error.message);
    Alert.alert('Registration Error', 'Failed to register animal. Please try again.');
  }
};
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <HeaderAndTab
        onMenuPress={() => console.log('Menu clicked')}
        onBellPress={() => console.log('Bell clicked')}
        activeTab="Home"
        onTabPress={(tab) => console.log(`${tab} tab clicked`)}
      />
      <KeyboardAwareScrollView
        style={styles.formContainer}
        contentContainerStyle={styles.scrollContent}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={keyboardVisible ? 150 : 100}
      >
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
          placeholder="Enter Tag Number (optional)"
        />

        <Text style={styles.label}>Sensor ID Number</Text>
        <TextInput
          style={styles.input}
          value={sensorId}
          onChangeText={setSensorId}
          placeholder="Enter Sensor ID (optional)"
        />

        <Text style={styles.label}>Animal's Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Enter Age"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={[styles.registerButton, loading && { opacity: 0.7 }]}
          onPress={handleAnimalRegister}
          disabled={loading}
        >
          <Text style={styles.registerButtonText}>
            {loading ? "Registering..." : "Register"}
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <TabBar activeTab="Home" />
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
    paddingBottom: 100,
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
