import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ArrowBackIcon from './assets/icons/back.svg';  
import LocationIcon from './assets/icons/location.svg';      

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
    marginBottom: 30,  
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
    marginTop: 20,            
    paddingVertical: 12,      
    paddingHorizontal: 30,    
    borderRadius: 25,         
    alignItems: 'center',     
    backgroundColor: '#28a745',  
    justifyContent: 'center', 
    elevation: 3,             
    shadowColor: '#000',      
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,       
    shadowRadius: 4,          
  },
  submitButtonText: {
    color: '#fff',          
    fontSize: 16,          
    fontWeight: '600',       
    fontFamily: 'Kodchasan-Regular', 
  },
});
