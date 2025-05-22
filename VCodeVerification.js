import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function VCodeVerification({ navigation }) {
  const [code, setCode] = useState(['', '', '', '', '', ]);
  const [timeLeft, setTimeLeft] = useState(180); 
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsResendEnabled(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const isCodeComplete = code.every(digit => digit !== '');

  const handleResendOTP = () => {
    // Your logic to resend OTP
    console.log('Resending OTP...');
    setTimeLeft(180); // Reset timer to 3 minutes
    setIsResendEnabled(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Code Verification</Text>
      <Text style={styles.subtitle}>Please enter the code we sent to your phone number.</Text>

      <View style={styles.otpContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
          />
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          {isResendEnabled ? (
            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </TouchableOpacity>
          ) : (
            `Time Remaining: ${formatTime(timeLeft)}`
          )}
        </Text>
      </View>

      {isCodeComplete && (
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => navigation.navigate('InfoScreen')}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      )}
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
    fontFamily: 'Kodchasan-Regular',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    textAlign: 'center',
    fontSize: 24,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  resendText: {
    fontFamily: 'Kodchasan-Regular',
    color: '#666',
    marginRight: 5,
  },
  resendLink: {
    fontFamily: 'Kodchasan-Regular',
    color: 'green',
    fontWeight: '500',
  },
  verifyButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
