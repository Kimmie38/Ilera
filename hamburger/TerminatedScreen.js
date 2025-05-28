import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TerminatedScreen() {
  const navigation = useNavigation();
  const phoneNumber = '+23480346587390';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}
        style={styles.backButton} >
         <Ionicons name="arrow-back" size={24} color="#000" />
         </TouchableOpacity>
           <Text style={styles.headerTitle}>Terminated Appointments</Text>
            <View style={{ width: 24 }} /> 
             </View>

          <View style={styles.body}>
          <Text style={styles.noAnimalsText}>no terminated appointments</Text>
          <Text style={styles.subText}>
          Notification will be sent about appointments
         </Text>
          </View>
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
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Kodchasan-Bold',
    marginLeft: 5, 
  },
  backButton: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
 body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  noAnimalsText: {
    fontFamily: 'Kodchasan-Bold',
    fontSize: 16,
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
});
