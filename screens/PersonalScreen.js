import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TabBar from './TabBar';
import api from '../utils/api';
import { useFocusEffect } from '@react-navigation/native';

export default function PersonalScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchProfile = async () => {
        try {
          setLoading(true);
          const response = await api.get('/profile/');
          const data = response.data;

          setUserData({
            fullName: `${data.first_name} ${data.last_name}`,
            phone: data.phone || '',
            email: data.email || '',
            address: data.profile?.location || '',
            bio: data.profile?.bio || '',
          });

          console.log('Fetched profile:', data);
        } catch (error) {
          console.error('Error fetching profile:', error.response?.data || error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProfile();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#888' }}>No profile data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput style={styles.input} value={userData.fullName} editable={false} />

        <Text style={styles.label}>Phone No:</Text>
        <TextInput style={styles.input} value={userData.phone} editable={false} />

        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} value={userData.email} editable={false} keyboardType="email-address" />

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={[styles.input, { height: 60 }]}
          value={userData.address}
          editable={false}
          multiline
        />

        <Text style={styles.label}>Bio:</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={userData.bio}
          editable={false}
          multiline
        />
      </View>

      <TabBar activeTab="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    color: '#555',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 16,
    paddingVertical: 6,
    marginBottom: 20,
    color: '#000',
  },
});
