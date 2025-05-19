import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegistryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register your account as a :</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Livestock Farmer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Veterinary Doctor</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>
        Click the “livestock farmer” button if you are a farmer whilst if you are a veterinary doctor,
        click on the “Veterinary Doctor” button to access your accounts
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#000',
  },
  button: {
    backgroundColor: '#37833b',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: 'Kodchasan-Regular',
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  infoText: {
    fontFamily: 'Kodchasan-Regular',
    marginTop: 20,
    fontSize: 12,
    color: '#666',
  },
});
