import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MenuIcon from './assets/icons/menu.svg';
import BellIcon from './assets/icons/bell.svg';
import HomeIcon from './assets/icons/home.svg';
import VetIcon from './assets/icons/vet.svg';
import VideosIcon from './assets/icons/resources.svg';
import ProfileIcon from './assets/icons/profile.svg';

export default function HeaderAndTab({ onMenuPress, onBellPress, activeTab = 'Home', onTabPress }) {
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

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => onTabPress('Home')}>
          <HomeIcon width={24} height={24} fill={activeTab === 'Home' ? 'green' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTabPress('Vet')}>
          <VetIcon width={24} height={24} fill={activeTab === 'Vet' ? 'green' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTabPress('Videos')}>
          <VideosIcon width={24} height={24} fill={activeTab === 'Videos' ? 'green' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTabPress('Profile')}>
          <ProfileIcon width={24} height={24} fill={activeTab === 'Profile' ? 'green' : 'gray'} />
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
});
