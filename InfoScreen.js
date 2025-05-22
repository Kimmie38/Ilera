import React from 'react';
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

const InfoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Arrow */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Title */}
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

        {/* Farm Address */}
        <Text style={styles.label}>Farm Address</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.textInput}
            placeholder="Vom, Azi compound"
            placeholderTextColor="#999"
          />
          <Ionicons name="location-sharp" size={20} color="black" />
        </View>

        {/* Bio */}
        <Text style={styles.label}>Bio</Text>
        <Text style={styles.subLabel}>
          write a little about your experience as a vet doctor
        </Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        {/* Register Button */}
         <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('VMainScreen')}
    >
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;

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
  borderRadius: 20, // makes it circular
  backgroundColor: '#DDDDDE', // light gray background
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
