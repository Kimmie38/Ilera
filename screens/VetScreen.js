import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import HeaderAndTab from './HeaderAndTab';
import TabBar from './TabBar';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const doctors = [
  {
    name: 'Dr. Muhamadu Rufai',
    experience: '10 years working experience goats, cows, pigs and lots...',
    image: require('../assets/docs/doc1.jpg'),
    available: false,
  },
  {
    name: 'Dr. Olu Kolapo',
    experience: '10 years working experience goats, cows, pigs and lots...',
    image: require('../assets/docs/doc2.jpg'),
    available: false,
  },
  {
    name: 'Dr. Ikenna Chidi',
    experience: '10 years working experience goats, cows, pigs and lots...',
    image: require('../assets/docs/doc3.jpg'),
    available: false,
  },
  {
    name: 'Dr. Fabura Amaka',
    experience: '10 years working experience goats, cows, pigs and lots...',
    image: require('../assets/docs/doc4.jpg'),
    available: false,
  },
  {
    name: 'Dr. Tanko Amina',
    experience: '10 years working experience goats, cows, pigs and lots...',
    image: require('../assets/docs/doc5.jpg'),
    available: false,
  },
];

export default function VetScreen({navigation}) {
  
  useFocusEffect(
  React.useCallback(() => {
    const onBackPress = async () => {
      try {
        const isFirstTime = await AsyncStorage.getItem('isFirstTime');
        if (isFirstTime === 'true') {
          navigation.navigate('MainScreen');
        } else {
          navigation.navigate('DashboardScreen');
        }
      } catch (error) {
        console.error('Error reading isFirstTime:', error);
        navigation.navigate('DashboardScreen'); // fallback
      }
      return true; // prevent default
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [])
);

  return (
    <View style={styles.container}>
      <HeaderAndTab/>

      {/* Search Bar */}
      <TextInput style={styles.searchInput} placeholder="Search for Doctors" />

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Vet Doctors Near You</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        {doctors.map((doc, index) => (
          <View key={index} style={styles.card}>
            <Image source={doc.image} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{doc.name}</Text>
              <Text style={styles.experience}>{doc.experience}</Text>
              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: doc.available? '#32cd32' : '#ccc' },
                  ]}
                />
                <Text style={styles.statusText}>
                  {doc.available ? 'Available' : 'Unavailable'}
                </Text>
              </View>
            </View>
           <TouchableOpacity onPress={() => navigation.push('MoreScreen', { doctor: doc })}
            style={styles.frontButton}>
                       <Ionicons name="arrow-forward" size={15} color="#333" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
              <TabBar activeTab="Vet" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    marginHorizontal: 20,
    marginTop: 12,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    fontFamily: 'Kodchasan-Regular',
  },
  sectionTitle: {
    marginHorizontal: 80,
    marginVertical: 12,
    fontSize: 16,
    fontFamily: 'Kodchasan-Bold',
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 14,
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 14,
  },
  frontButton:{
      padding: 6,
  backgroundColor: '#DDDDDE',
  borderRadius: 30,
  marginTop:50,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Kodchasan-Bold',
    color: '#111',
  },
  experience: {
    fontSize: 12,
    color: '#555',
    marginVertical: 4,
    fontFamily: 'Kodchasan-Regular',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'Kodchasan-Regular',
  },
  arrow: {
    fontSize: 22,
    color: '#888',
    paddingHorizontal: 8,
  },
});
