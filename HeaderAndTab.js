import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import MenuIcon from './assets/icons/menu.svg';
import BellIcon from './assets/icons/bell.svg';
import HomeIcon from './assets/icons/home.svg';
import VetIcon from './assets/icons/vet.svg';
import VideosIcon from './assets/icons/resources.svg';
import ProfileIcon from './assets/icons/profile.svg';

export default function HeaderAndTab({ onMenuPress, onBellPress }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState(route.name);

  useEffect(() => {
    setActiveTab(route.name);
  }, [route.name]);

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    switch (tabName) {
      case 'Home':
        navigation.navigate('MainScreen');
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

  const TABS = [
    { name: 'Home', Icon: HomeIcon },
    { name: 'Vet', Icon: VetIcon },
    { name: 'Videos', Icon: VideosIcon },
    { name: 'Profile', Icon: ProfileIcon },
  ];

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onMenuPress}>
          <MenuIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onBellPress}>
          <BellIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* TabBar */}
      <View style={styles.tabBar}>
        {TABS.map(({ name, Icon }) => (
          <TouchableOpacity key={name} onPress={() => handleTabPress(name)} style={styles.tabItem}>
            <Icon width={24} height={24} fill={activeTab === name + 'Screen' ? 'green' : 'gray'} />
            <Text style={[styles.tabLabel, { color: activeTab === name + 'Screen' ? 'green' : 'gray' }]}>
              {name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    zIndex: 1,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 12,
    marginTop: 2,
  },
});
