import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Feather name="menu" size={24} color="black" />
        <Text style={styles.homeText}>Home</Text>
        <Feather name="bell" size={24} color="black" />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>No Animals Registered</Text>
        <Text style={styles.subtitle}>
          Please click the register button to register your animals and track their health
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegistryScreen')}>
          <Text style={styles.buttonText}>Register Animals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  homeText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'green',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
