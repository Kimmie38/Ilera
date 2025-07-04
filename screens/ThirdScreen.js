import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';


export default function ThirdScreen({ navigation }) {
   useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          navigation.replace('Second'); 
          return true; 
        };
    
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
        return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [])
    );
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/docs/farmer3.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Connect with Your Vet Instantly</Text>
        <Text style={styles.subtitle}>
          Share health reports with your vet in one tap. Quick support means faster treatment and recovery.
        </Text>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RegistryScreen')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
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
    borderRadius: 23,
    width: '100%',
    height: '60%',
    marginTop: 28,
  },
  textContainer: {
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 18,
    fontWeight: '600',
    color: '#37833b',
  },
  subtitle: {
    fontFamily: 'Kodchasan-Regular',
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 30,
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
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
