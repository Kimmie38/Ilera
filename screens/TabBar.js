import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeIcon from '../assets/icons/home.svg';
import VetIcon from '../assets/icons/vet.svg';
import VideosIcon from '../assets/icons/resources.svg';
import ProfileIcon from '../assets/icons/profile.svg';

export default function TabBar() {
  const navigation = useNavigation();
  const route = useRoute();

  const routeNameToTab = {
    MainScreen: 'Home',
    VetScreen: 'Vet',
    VideoScreen: 'Videos',
    ProfileScreen: 'Profile',
    DashboardScreen: 'Home', // Include Dashboard if it shares tab with Home
  };

  const activeTab = routeNameToTab[route.name] || '';

  
 const handleTabPress = async (tabName) => {
  switch (tabName) {
    case 'Home':
      try {
        const isFirstTime = await AsyncStorage.getItem('isFirstTime');
        console.log('isFirstTime value:', isFirstTime); // 🪵 Log the value

        if (isFirstTime === 'true') {
          console.log('Navigating to MainScreen');
          navigation.navigate('MainScreen');
        } else {
          console.log('Navigating to DashboardScreen');
          navigation.navigate('DashboardScreen');
        }
      } catch (error) {
        console.error('Error reading AsyncStorage:', error);
        navigation.navigate('MainScreen'); // Fallback
      }
      break;
    case 'Vet':
      navigation.navigate('VetScreen');
      break;
    case 'Videos':
      navigation.navigate('VideoScreen');
      break;
    case 'Profile':
      navigation.navigate('ProfileScreen');
      break;
  }
};

  const tabs = [
    { name: 'Home', Icon: HomeIcon },
    { name: 'Vet', Icon: VetIcon },
    { name: 'Videos', Icon: VideosIcon },
    { name: 'Profile', Icon: ProfileIcon },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map(({ name, Icon }) => {
        const isActive = activeTab === name;
        return (
          <TouchableOpacity
            key={name}
            onPress={() => handleTabPress(name)}
            style={styles.tabItem}
          >
            <Icon width={26} height={26} fill={isActive ? '#4CAF50' : '#999'} />
            <Text style={[styles.tabLabel, { color: isActive ? '#4CAF50' : '#999' }]}>
              {name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 11,
    marginTop: 4,
  },
});
