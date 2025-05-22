import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
} from 'react-native';
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('window').width;

export default function VMoreScreen({ route }) {
  const { doctor } = route.params;
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleAction = () => {
    setModalVisible(false);
    if (modalType === 'accept') {
      navigation.navigate('LivestockScreen', { doctor });
    } else {
      alert('Request Declined');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Farmer's Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={doctor.image} style={styles.avatar} />
        <Text style={styles.name}>{doctor.name}</Text>

        <Text style={styles.bio}>
          A farmer dedicated to livestock farming especially goats, holds a number of 80 Goats, 10 Sheep and 50 Cows.
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
            setModalType('accept');
            setModalVisible(true);
          }}
        >
          <Text style={styles.requestText}>Request Service</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.declineButton}
          onPress={() => {
            setModalType('decline');
            setModalVisible(true);
          }}
        >
          <Text style={styles.declineText}>Decline Request</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              {modalType === 'accept' ? 'Accept request' : 'Decline request'}
            </Text>
            <Text style={styles.modalMessage}>
              Do you want to {modalType === 'accept' ? 'accept' : 'decline'} this request?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleAction}
              >
                <Text style={styles.confirmText}>
                  {modalType === 'accept' ? 'Accept' : 'Decline'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  statusBarSpacer: { height: Constants.statusBarHeight },
headerRow: {
  paddingTop: 20,
  paddingBottom: 12,
  paddingHorizontal: 16,
  backgroundColor: '#fff',
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
},

  backButton: {
    zIndex: 2,
      padding: 6,
  backgroundColor: '#DDDDDE',
  borderRadius: 30,

  // iOS shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,

  // Android shadow
  elevation: 4,
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
    fontFamily: 'Kodchasan-Bold',
    top: 30,
    transform: [{ translateY: -9 }], // vertically center the text
  },

  content: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 160,
  },
  avatar: { width: 140, height: 140, borderRadius: 70, marginBottom: 16 },
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
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  location: { fontSize: 13, fontFamily: 'Kodchasan-Bold', color: '#333' },
  contactRow: { flexDirection: 'row', marginTop: 20, gap: 20 },
  iconButton: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 30,
  },
  requestButton: {
    marginTop: 30,
    backgroundColor: '#528C4A',
    paddingVertical: 16,
    width: '90%',
    borderRadius: 30,
    alignItems: 'center',
  },
  requestText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  declineButton: {
    marginTop: 16,
    backgroundColor: '#528C4A',
    paddingVertical: 16,
    width: '90%',
    borderRadius: 30,
    alignItems: 'center',
  },
  declineText: { color: '#fff', fontSize: 15, fontWeight: '600' },

  // MODAL STYLES
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: screenWidth * 0.8,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 6,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Kodchasan-Bold',
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Kodchasan-Regular',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  cancelText: { color: '#333', fontSize: 14, fontWeight: '500' },
  confirmButton: {
    backgroundColor: '#528C4A',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  confirmText: { color: '#fff', fontSize: 14, fontWeight: '600' },
});
