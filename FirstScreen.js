// FirstScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 👈 Add this

export default function FirstScreen() {
  const navigation = useNavigation(); // 👈 Add this
  
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/farmer.png')} // Replace with your image path
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Monitor Livestock Health Effortlessly</Text>
        <Text style={styles.subtitle}>
          Monitor your animals health in real-time with smart wearable sensors—no paperwork, just precision.
        </Text>
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Second')} // 👈 Add this
        >
          <Text style={styles.buttonText}>next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 25,
    marginTop: 23,
  },
  textContainer: {
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
    
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#37833b',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: '#37833b',
  },
  button: {
    backgroundColor: '#37833b',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
