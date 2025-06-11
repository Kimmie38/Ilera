
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';  

export default function InfoScreen({ navigation }) {
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

    navigation.navigate('VMainScreen');
    } catch (err) {
        Alert.alert('Registration Failed', JSON.stringify( 'An error occurred'));
      }
};

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1 }}
        >
    
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
         <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
           <ArrowBackIcon width={24} height={24} />
             </TouchableOpacity>
        

        <Text style={styles.title}>Verify that you are a Vet</Text>
        <Text style={styles.subtitle}>
          Fill the form below with the correct details
        </Text>

        {/* Vet Certificate ID */}
        <Text style={styles.label}>Veterinary Certificate ID number</Text>
        <TextInput
          style={styles.input}
          placeholder="DB-234503C"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Farm Address</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.textInput}
            placeholder="Vom, Azi compound"
            placeholderTextColor="#999"
            value={farmAddress}
            onChangeText={setFarmAddress}
          />
          <Ionicons name="location-sharp" size={20} color="black" />
        </View>

        <Text style={styles.label}>Bio</Text>
        <Text style={styles.subLabel}>
          write a little about your experience as a vet doctor
        </Text>
        <TextInput
          style={[styles.input, styles.textArea]}
           multiline
            value={bio}
            onChangeText={setBio}
          numberOfLines={4}
          textAlignVertical="top"
        />

       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
             <Text style={styles.submitButtonText}>Submit</Text>   
             </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
     </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    marginTop: 40,
  },
  backButton: {
     width: 40,
  height: 40,
  borderRadius: 20, 
  backgroundColor: '#DDDDDE', 
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
    fontFamily:"Kodchasan-Bold",
  },
  subtitle: {
    color: '#888',
    marginBottom: 20,
    fontFamily:"Kodchasan-Regular",
  },
  label: {
    fontWeight: '500',
    marginBottom: 5,
    marginTop: 15,
    fontFamily:"Kodchasan-Regular",
    fontSize:16,
  },
  subLabel: {
    fontSize: 13,
    color: '#888',
    marginBottom: 5,
    fontFamily:"Kodchasan-Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily:"Kodchasan-Regular",
  },
  button: {
    marginTop: 30,
    backgroundColor: '#528C4A',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    fontFamily:"Kodchasan-Regular",
  },
});
