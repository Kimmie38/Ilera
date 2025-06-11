import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import ArrowBackIcon from '../assets/icons/back.svg';  
import LocationIcon from '../assets/icons/location.svg';  
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../utils/api';    

export default function BioScreen({ navigation }) {
  const [farmAddress, setFarmAddress] = useState('');
  const [bio, setBio] = useState('');

  const handleGoBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    } else {
      console.log('Go back pressed');
    }
  };

 const handleSubmit = async () => {
  if (!farmAddress || !bio) {
    Alert.alert('Missing Fields', 'Please fill in all the fields.');
    return;
  }

  try {
    const response = await api.patch('/profile/', {
      profile: {
        bio: bio,
        location: farmAddress,
      },
    });

    console.log('Profile updated:', response.data);

    await AsyncStorage.setItem('@farm_address', farmAddress);
    await AsyncStorage.setItem('@bio', bio);

    navigation.navigate('MainScreen');
    } catch (err) {
        Alert.alert('Registration Failed', JSON.stringify( 'An error occurred'));
      }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <ArrowBackIcon width={24} height={24} />
        </TouchableOpacity>

        <Text style={styles.header}>Enter farm details</Text>
        <Text style={styles.subtitle}>Please fill the form below</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Farm Address</Text>
          <View style={styles.inputWithIcon}>
            <LocationIcon width={20} height={20} style={styles.locationIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter farm address"
              value={farmAddress}
              onChangeText={setFarmAddress}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Write a little about your experience as a farmer"
            multiline
            value={bio}
            onChangeText={setBio}
          />
        </View>

    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
      <Text style={styles.submitButtonText}>Submit</Text>   
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  header: {
    fontFamily: 'Kodchasan-Bold',
    fontSize: 24,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Kodchasan-Bold',
    marginBottom: 6,
  },
  inputWithIcon: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 50,
  },
  locationIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontFamily: 'Kodchasan-Regular',
    fontSize: 16,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
    paddingTop: 10,
    paddingHorizontal: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#528C4A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Kodchasan-Regular',
  },
});
