import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your{"\n"}account as a Farmer</Text>
      <Text style={styles.subtitle}>Please sign in to your account</Text>

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g 08034567890"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

     <TouchableOpacity
      style={styles.signInButton}
      onPress={() => navigation.navigate('DashboardScreen')} // 👈 Name of your main page
    >
      <Text style={styles.signInText}>Login</Text>
    </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Kodchasan-Bold',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 14,
    color: 'gray',
    marginBottom: 30,
  },
  label: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'Kodchasan-Regular',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 14,
  },
  passwordContainer: {
    fontFamily: 'Kodchasan-Regular',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  inputPassword: {
    flex: 1,
    fontSize: 14,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: 'green',
    fontSize: 13,
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 13,
    color: '#000',
  },
  signupLink: {
    fontSize: 13,
    color: 'green',
    fontWeight: '500',
  },
});
