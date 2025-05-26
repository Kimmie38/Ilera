import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderAndTab from './HeaderAndTab'; // adjust path if needed
import TabBar from './TabBar';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export default function MainScreen({ navigation }) {
  useFocusEffect(
  React.useCallback(() => {
    const onBackPress = () => {
      navigation.replace('LoginScreen'); 
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [])
);
  return (
    <View style={styles.container}>

      <HeaderAndTab
        onMenuPress={() => console.log('Hamburger clicked')}
        onBellPress={() => console.log('Bell clicked')}
        activeTab="Home"
        onTabPress={(tab) => console.log(`${tab} tab clicked`)}
      />

      
      <View style={styles.body}>
        <Text style={styles.noAnimalsText}>No Animals Registered</Text>
        <Text style={styles.subText}>
          Please Click the register button{"\n"}to register your animals and{"\n"}track their health
        </Text>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={styles.registerButtonText}>Register Animals</Text>
        </TouchableOpacity>
      </View>
       <TabBar activeTab="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
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
  registerButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  registerButtonText: {
    fontFamily: 'Kodchasan-Regular',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
