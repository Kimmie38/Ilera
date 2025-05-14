import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ArrowBackIcon from './assets/icons/arrow-back.svg';  // Back arrow SVG
import LocationIcon from './assets/icons/location.svg';      // Location SVG

export default function BioScreen({navigation}) {
  const [farmAddress, setFarmAddress] = useState('');
  const [bio, setBio] = useState('');

 
  const handleGoBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    } else {
      console.log('Go back pressed');
    }
  };

  return (
    <View style={styles.container}>
    {/* Back Arrow */}
    <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
      <ArrowBackIcon width={30} height={30} />
    </TouchableOpacity>

    <View style={styles.container}>
      <Text style={styles.header}>Enter farm details</Text>
      <Text style={styles.subtitle}>Please fill the form below</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Farm Address</Text>
        <View style={styles.inputWithIcon}>
        <LocationIcon width={0} height={0} style={styles.locationIcon} />
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

      <TouchableOpacity
  style={styles.submitButton}
  onPress={() => navigation.navigate('MainScreen')}
>
  <Text style={styles.submitButtonText}>Submit</Text>
</TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50, // shifted everything down
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
  header: {
    fontFamily: 'Kodchasan-Bold',
    fontSize: 24,
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 10,
    width: 20,
  },
  locationIcon: {
    marginRight: 10,
    },
  subtitle: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 16,
    color: '#555',
    marginBottom: 30,  // increased spacing below subtitle
  },
  inputContainer: {
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontFamily: 'Kodchasan-Bold',
  },
  input: {
    fontFamily: 'Kodchasan-Regular',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    marginTop: 5,
  },
  
  textArea: {
    height: 150, // made the Bio input bigger
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 20,            // Adds some space above the button
    paddingVertical: 12,      // Adds padding on top and bottom of the button
    paddingHorizontal: 30,    // Adds padding to the left and right of the button
    borderRadius: 25,         // Makes the corners rounded
    alignItems: 'center',     // Centers the content (text) inside the button
    backgroundColor: '#28a745',  // Green background
    justifyContent: 'center', // Ensures the button is centered vertically
    elevation: 3,             // Adds a shadow effect (only on Android)
    shadowColor: '#000',      // Shadow color (for iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
    shadowOpacity: 0.2,       // Shadow opacity (for iOS)
    shadowRadius: 4,          // Shadow radius (for iOS)
  },
  submitButtonText: {
    color: '#fff',           // White text color
    fontSize: 16,            // Font size of the text
    fontWeight: '600',       // Semi-bold text
    fontFamily: 'Kodchasan-Regular', // Assuming you are using your custom font
  },
});
