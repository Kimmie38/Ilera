import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import HeaderAndTab from './HeaderAndTab';
import VTabBar from './VTabBar';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const doctors = [
  {
    name: 'Alex Otti',
    experience: 'A farmer dedicated to livestock farming especially goats....',
    image: require('../../assets/docs/famer1.png'),
    
  },
  {
    name: 'Dotun Babangida',
    experience: 'A farmer dedicated to livestock farming especially goats....',
    image: require('../../assets/docs/famer2.png'),
    available: false,
  },
  {
    name: 'Desmond Tinibu',
    experience: 'A farmer dedicated to livestock farming especially goats....',
    image: require('../assets/docs/famer3.png'),
    available: false,
  },
  {
    name: 'Justice Adam',
    experience: 'A farmer dedicated to livestock farming especially goats....',
    image: require('../../assets/docs/famer4.png'),
    available: false,
  },
  {
    name: 'Jigga',
    experience: 'A farmer dedicated to livestock farming especially goats....',
    image: require('../../assets/docs/farmers5.jpg'),
    available: false,
  },
];

export default function TaskScreen({navigation}) {
    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          navigation.replace('VMainScreen'); 
          return true;
        };
    
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
        return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [])
    );
  return (
    <View style={styles.container}>
      <HeaderAndTab
        onMenuPress={() => console.log('Hamburger clicked')}
        onBellPress={() => console.log('Bell clicked')}
        activeTab="Task"
        onTabPress={(tab) => console.log(`${tab} tab clicked`)}/>

      <Text style={styles.sectionTitle}>Farmers Requesting your Service</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        {doctors.map((doc, index) => (
          <View key={index} style={styles.card}>
            <Image source={doc.image} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{doc.name}</Text>
              <Text style={styles.experience}>{doc.experience}</Text>
              <View style={styles.statusRow}>
                <View
                />
              </View>
            </View>
           <TouchableOpacity onPress={() => navigation.push('VMoreScreen', { doctor: doc })}
            style={styles.frontButton}>
              <Ionicons name="arrow-forward" size={15} color="#333" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
     <VTabBar activeTab="Task" />
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
  sectionTitle: {
    marginHorizontal: 50,
    marginVertical: 12,
    fontSize: 15,
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
  info: {
    flex: 1,
  },
  name: {
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
