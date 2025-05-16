import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderAndTab from './HeaderAndTab'; // adjust path if needed
import TabBar from './TabBar';

export default function VideoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header and Bottom Tabs */}
      <HeaderAndTab
        onMenuPress={() => console.log('Hamburger clicked')}
        onBellPress={() => console.log('Bell clicked')}
        onTabPress={(tab) => console.log(`${tab} tab clicked`)}
      />

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.noAnimalsText}>No Available Videos</Text>
        <Text style={styles.subText}>
          
        </Text>
      </View>
             <TabBar activeTab ="Video" />
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
    paddingBottom: 80, // Leave space for bottom tab
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
