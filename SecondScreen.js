// SecondScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export default function SecondScreen() {
     useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            navigation.replace('First'); 
            return true;
          };
      
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
      
          return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
      );
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/farmer2.png')} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Stay Ahead of Outbreaks</Text>
        <Text style={styles.subtitle}>
          Get instant alerts and insights to prevent illness before it spreads. Keep your farm safe and thriving.
        </Text>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Third')}>
         <Text style={styles.buttonText}>Next</Text>
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
    borderRadius: 25,
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
