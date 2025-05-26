import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import HeaderAndTab from './HeaderAndTab';
import TabBar from './TabBar';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export default function ProfileScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('MainScreen');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission Required',
          'We need access to your media library to update your profile picture.'
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while picking the image.');
    }
  };

 
  const handleOptionPress = (option) => {
    switch (option) {
      case 'Personal Data':
        navigation.navigate('PersonalScreen'); 
        break;
      case 'Help Center':

        break;
      case 'Request Account Deletion':
       
        break;
      case 'Add another account':
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <HeaderAndTab title="Profile" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileSection}>
          <TouchableOpacity onPress={pickImage} style={styles.profileImageWrapper}>
            <Image
              source={
                image
                  ? { uri: image }
                  : { uri: 'https://via.placeholder.com/100x100.png?text=User' }
              }
              style={styles.profileImage}
            />
            <View style={styles.cameraIcon}>
              <Feather name="camera" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
          <Text style={styles.userName}>Albert Magaji</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsList}>
          {['Personal Data', 'Help Center', 'Request Account Deletion', 'Add another account'].map((label) => (
            <OptionItem
              key={label}
              label={label}
              icon={getIconForLabel(label)}
              onPress={() => handleOptionPress(label)}
            />
          ))}
        </View>

        {/* Sign Out */}
        <TouchableOpacity
      style={styles.signOutButton}
      onPress={() => navigation.navigate('Signout')} 
    >
      <Text style={styles.signOutText}>
        <MaterialIcons name="logout" size={16} color="#F00" /> Sign Out
      </Text>
    </TouchableOpacity>
      </ScrollView>

      <TabBar activeTab="Profile" />
    </View>
  );
}

const getIconForLabel = (label) => {
  switch (label) {
    case 'Personal Data':
      return <Ionicons name="person-outline" size={20} />;
    case 'Help Center':
      return <Ionicons name="help-circle-outline" size={20} />;
    case 'Request Account Deletion':
      return <Ionicons name="trash-outline" size={20} />;
    case 'Add another account':
      return <Ionicons name="person-add-outline" size={20} />;
    default:
      return null;
  }
};

const OptionItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <View style={styles.optionIcon}>{icon}</View>
    <Text style={styles.optionLabel}>{label}</Text>
    <Feather name="chevron-right" size={20} color="#333" style={styles.optionArrow} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  profileImageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 4,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  optionsList: {
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  optionIcon: {
    marginRight: 12,
  },
  optionLabel: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    fontFamily:"Kodchasan-Bold",
  },
  optionArrow: {
    color: '#999',
  },
  signOutButton: {
  marginTop: 100,
  borderWidth: 1,
  borderColor: '#D6D6D6',
  borderRadius: 30,
  alignSelf: 'center',
  width: '80%',           
  paddingVertical: 12,
  alignItems: 'center',   
  justifyContent: 'center', 
  flexDirection: 'row',   
  gap: 6,                 
},

signOutText: {
  color: '#f00',
  fontSize: 16,
  fontWeight: '500',
},
});
