import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Alert, BackHandler
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import api from '../utils/api';

export default function SignupScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('RegistryScreen');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('FARMER');
  const [agree, setAgree] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [secureConfirmText, setSecureConfirmText] = useState(true);

  const handleUserRegister = async () => {
    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword || !role) {
      Alert.alert('Missing Fields', 'Please fill in all fields including role.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }

    if (!agree) {
      Alert.alert('Agreement Required', 'You must agree to the Terms and Privacy Policy.');
      return;
    }

    try {
      const res = await api.post('https://ilera.onrender.com/api/v1/signup/', {
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phoneNumber,
        password,
        role,
      });

// after successful signup
navigation.navigate('CodeVerificationScreen', { phoneNumber});

    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      Alert.alert('Registration Failed', JSON.stringify(err.response?.data || 'An error occurred'));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('RegistryScreen')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Create your new account as a Farmer</Text>
      <Text style={styles.subtitle}>Create an account to start monitoring your livestock health</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 10 }]}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

    <View style={styles.pickerContainer}>
  <Text style={styles.pickerLabel}>Select Role</Text>
  <View style={styles.pickerWrapper}>
    <Picker
      selectedValue={role}
      onValueChange={(itemValue) => setRole(itemValue)}
      style={styles.picker}
    >
      <Picker.Item label="Farmer" value="FARMER" style={styles.pickerItem} />
      <Picker.Item label="Vet" value="VET" style={styles.pickerItem} />
    </Picker>
  </View>
</View>


      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={() => setSecureText(!secureText)}>
          <Ionicons name={secureText ? 'eye-off' : 'eye'} size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={secureConfirmText}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={() => setSecureConfirmText(!secureConfirmText)}>
          <Ionicons name={secureConfirmText ? 'eye-off' : 'eye'} size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxRow}>

        <Checkbox
          status={agree ? 'checked' : 'unchecked'}
          onPress={() => setAgree(!agree)}
          color="#37833b"
        />
        <Text style={styles.checkboxText}>
          I Agree with <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.registerButton, { backgroundColor: agree ? '#37833b' : '#ccc' }]}
        disabled={!agree}
        onPress={handleUserRegister}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('LoginScreen')}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:
   { padding: 20, 
    paddingTop: 60
   },
  backButton: 
  { marginBottom: 20

   },
  title: 
  { fontFamily: 'Kodchasan-Bold',
     fontSize: 22,
      marginBottom: 10
   },
  subtitle: 
  { fontFamily: 'Kodchasan-Regular',
     fontSize: 14, 
     color: '#777',
      marginBottom: 20
   },
  inputRow: 
  { flexDirection: 'row',
     marginBottom: 15
   },
  input: {
    fontFamily: 'Kodchasan-Regular',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  passwordContainer: {
     position: 'relative',
      marginBottom: 15
 },
  eyeIcon: {
     position: 'absolute',
      right: 15,
       top: 15
 },
  checkboxRow: {
     flexDirection: 'row',
      alignItems: 'center',
       marginBottom: 20 
  },
  checkboxText: { 
    fontFamily: 'Kodchasan-Regular',
     flex: 1, 
     flexWrap: 'wrap'
 },
  linkText: {
     color: '#37833b',
      textDecorationLine: 
      'underline' 
  },
  registerButton: {
     padding: 15,
      borderRadius: 25, 
      alignItems: 'center',
       marginBottom: 20
 },
  registerText: {
     fontFamily: 'Kodchasan-Bold',
      color: 'white'
 },
  footerText: {
     fontFamily: 'Kodchasan-Regular',
      textAlign: 'center',
       fontSize: 14
 },
  signInLink: { 
    color: '#37833b',
     fontWeight: 'bold' 
  },
   pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    fontFamily: 'Kodchasan-Regular',
    marginBottom: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#d1d5db', // like Tailwind gray-200
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
  },
  picker: {
    height: 50,
    color: '#000', // optional: text color
  },
    pickerItem: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 14,
    color: '#1f2937',
},
});