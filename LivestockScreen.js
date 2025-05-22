import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LivestockScreen({ route }) {
     const { doctor } = route.params;
     const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Farmers Profile</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={doctor.image} style={styles.avatar} />
        <Text style={styles.name}>{doctor.name}</Text>

        <Text style={styles.bio}>
          A famer dedicated to livestock farming especially goats, holds a number of 80 Goats, 10 Sheeps and 50 Cows 
        </Text>

        <View style={styles.locationRow}>
          <Entypo name="location-pin" size={20} color="#000" />
          <Text style={styles.location}>PRTV Junction Rayfield</Text>
        </View>

          <View style={styles.contactRow}>
                 <TouchableOpacity style={styles.iconButton}>
                   <Ionicons name="call" size={22} color="#333" />
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.iconButton}>
                   <FontAwesome5 name="comment-alt" size={20} color="#333" />
                 </TouchableOpacity>
               </View>

        <View style={styles.statusRow}>
          <Text style={styles.statusText}>Accepted</Text>
          <Ionicons name="checkmark" size={18} color="green" />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Livestock Data</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
   bio: {
    fontSize: 15,
    fontFamily: 'Kodchasan-Regular',
    textAlign: 'center',
    color: '#555',
    marginVertical: 12,
    lineHeight: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
  },
  name: {
    fontSize: 16,
    fontFamily:"Kodchasan-Bold",
    color: '#000',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 13,
    color: '#444',
    marginBottom: 20,
    lineHeight: 18,
    paddingHorizontal: 10,
  },
  locationRow: {
   flexDirection: 'row', 
   alignItems: 'center', 
   marginTop: 8
  },
  location: {
   fontSize: 13,
    fontFamily: 'Kodchasan-Bold',
    color: '#333'
  },
  iconButton:{
         backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 30,
  },
  contactRow: {
    flexDirection: 'row',
     marginTop: 20,
     gap: 20 
  },
  contactIcon: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 25,
  },
  
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
  },
  statusText: {
    fontSize: 14,
    color: 'green',
    fontWeight: '500',
    fontFamily:"Kodchasan-Regular",

  },
  button: {
    backgroundColor: '#528C4A',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    fontFamily:"Kodchasan-Regular",
  },
});
