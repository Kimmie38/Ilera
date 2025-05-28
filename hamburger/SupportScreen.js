import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SupportScreen() {
  const navigation = useNavigation();
  const phoneNumber = '+23480346587390';

  const openWhatsApp = () => {
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(() => {
      alert('Make sure WhatsApp is installed on your device');
    });
  };

  const dialNumber = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const sendMessage = () => {
    Linking.openURL(`sms:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={styles.backButton} >
              <Ionicons name="arrow-back" size={24} color="#000" />
                 </TouchableOpacity>
                  <Text style={styles.headerTitle}>Customer Suppport</Text>
                    <View style={{ width: 24 }} /> 
                    </View>

      {/* Description */}
      <Text style={styles.description}>
        Contact us through our lines to make your complaint or any enquiry.
      </Text>

      {/* Contact Options */}
      <View style={styles.optionRow}>
        <Ionicons name="call-outline" size={40} color="#000" />
        <Text style={styles.phoneText} onPress={dialNumber}>
          {phoneNumber}
        </Text>
      </View>

      <View style={styles.optionRow}>
        <FontAwesome name="whatsapp" size={40} color="#25D366" />
        <Text style={styles.phoneText} onPress={openWhatsApp}>
          {phoneNumber}
        </Text>
      </View>

      <View style={styles.optionRow}>
        <MaterialCommunityIcons name="message-outline" size={40} color="#000" />
        <Text style={styles.phoneText} onPress={sendMessage}>
          {phoneNumber}
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
    marginLeft: 20, 
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
  description: {
    color: '#888',
    fontSize: 14,
    marginBottom: 30,
    fontFamily:'Kodchasan-Regular',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  phoneText: {
    fontSize: 18,
    marginLeft: 12,
    color: '#000',
    fontFamily:'Kodchasan-Regular',
  },
});
