import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signout() {
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack(); // ⬅️ Go back to the previous screen
  };

  const handleLogout = () => {
    // You can also clear auth data here if needed
    navigation.navigate('LoginScreen'); // ⬅️ Go to MainScreen after logout
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalBox}>
        <Text style={styles.title}>Sign Out</Text>
        <Text style={styles.subtitle}>Do you want to log out?</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)', // Optional dim background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 25,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  cancelText: {
    color: '#333',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
  },
});
