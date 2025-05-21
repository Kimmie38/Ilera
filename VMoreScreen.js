import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function VMoreScreen({ route }) {
  const { doctor } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* StatusBar space */}
      <View style={styles.statusBarSpacer} />

      {/* Header with back button */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Centered Title */}
      <Text style={styles.headerTitle}>Farmer's Profile</Text>

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

        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => {
            ToastAndroid.show('Service currently unavailable', ToastAndroid.SHORT);
          }}
        >
          <Text style={styles.requestText}>Request Service</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.declineButton}
          onPress={() => {
            ToastAndroid.show('Request declined', ToastAndroid.SHORT);
          }}
        >
          <Text style={styles.declineText}>Decline Request</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarSpacer: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Kodchasan-Bold',
    fontWeight: '600',
    color: '#111',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 160, // extra space for buttons
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Kodchasan-Bold',
    fontWeight: '600',
    color: '#111',
  },
  bio: {
    fontSize: 15,
    fontFamily: 'Kodchasan-Regular',
    textAlign: 'center',
    color: '#555',
    marginVertical: 12,
    lineHeight: 20,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  location: {
    fontSize: 13,
    fontFamily: 'Kodchasan-Bold',
    color: '#333',
  },
  contactRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
  iconButton: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 30,
  },
  requestButton: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  requestText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  declineButton: {
    marginTop: 15,
    backgroundColor: '#FF5252',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  declineText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
