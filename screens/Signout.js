import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VSignout() {
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack(); 
  };

  const handleLogout = () => {
    navigation.navigate('LoginScreen'); 
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
    backgroundColor: 'rgba(0,0,0,0.2)',
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
    fontFamily:"Kodchasan-Bold",
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    fontFamily:"Kodchasan-Regular",
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
    fontFamily:"Kodchasan-Regular",
  },
  logoutButton: {
    backgroundColor: '#528C4A',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily:"Kodchasan-Regular",
  },
});
