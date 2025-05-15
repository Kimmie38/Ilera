import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TabBar from './TabBar';

export default function PersonalScreen({ navigation }) {
  // For now, hardcoded user data
  const userData = {
    fullName: 'Albert Magaji',
    phone: '+234 80419606411',
    email: 'albertmagaji@gmail.com',
    address: '24 street, Dadin Kowa, Plateau State',
  };

  return (
    <View style={styles.container}>
      {/* Header with back arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={userData.fullName}
          editable={false}
          selectTextOnFocus={false}
        />

        <Text style={styles.label}>Phone No:</Text>
        <TextInput
          style={styles.input}
          value={userData.phone}
          editable={false}
          selectTextOnFocus={false}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={userData.email}
          editable={false}
          selectTextOnFocus={false}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={userData.address}
          editable={false}
          selectTextOnFocus={false}
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
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
