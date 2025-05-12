import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderAndTab from './HeaderAndTab'; // adjust path if needed

export default function MainScreen() {
  return (
    <View style={styles.container}>
      {/* Header and Bottom Tabs */}
      <HeaderAndTab
        onMenuPress={() => console.log('Hamburger clicked')}
        onBellPress={() => console.log('Bell clicked')}
        activeTab="Home"
        onTabPress={(tab) => console.log(`${tab} tab clicked`)}
      />

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.noAnimalsText}>No Animals Registered</Text>
        <Text style={styles.subText}>
          Please Click the register button{"\n"}to register your animals and{"\n"}track their health
        </Text>

        <TouchableOpacity style={styles.registerButton} onPress={() => console.log('Register Pressed')}>
          <Text style={styles.registerButtonText}>Register Animals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80, // Leave space for bottom tab
  },
  noAnimalsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  registerButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});