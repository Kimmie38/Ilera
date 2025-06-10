import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderAndTab from '../HeaderAndTab'; 
import VTabBar from './VTabBar';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export default function VMainScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.replace('VLoginScreen');
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

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.noAnimalsText}>no current appointment</Text>
        <Text style={styles.subText}>
          Please be patient while farmers request your service
        </Text>

      </View>
       <VTabBar activeTab="Home" />
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
