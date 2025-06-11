import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import HeaderAndTab from '../HeaderAndTab';
import VTabBar from './VTabBar';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




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
      <TextInput style={styles.searchInput} placeholder="Search for Farmers" />


      <View style={styles.container}>
          
           {/* Body */}
           
           <View style={styles.body}>
            <Image
                source={require('../../assets/image2.png')} // Adjust path if needed
                 style={styles.image}
                 resizeMode="contain"
                   />
            
             <Text style={styles.noAnimalsText}>No Farmer has requested Your service</Text>
             <Text style={styles.subText}>
               
             </Text>
           </View>
                  <VTabBar activeTab ="Task" />
         </View>
          </View>
       );
     }
     
     const styles = StyleSheet.create({
       container: {
         flex: 1,
         backgroundColor: '#fff',
         
       },
       body: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         paddingBottom: 80,
       },
       noAnimalsText: {
         fontFamily: 'Kodchasan-Bold',
         fontSize: 17,
         marginBottom: 10,
         color: '#000',
         textAlign: 'center',
       },
       subText: {
         fontFamily: 'Kodchasan-Regular',
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
         fontFamily: 'Kodchasan-Regular',
         color: '#fff',
         fontSize: 14,
         fontWeight: '600',
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
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
     
