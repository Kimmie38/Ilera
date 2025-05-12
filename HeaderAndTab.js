import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
        {[
          { name: 'Home', Icon: HomeIcon },
          { name: 'Vet', Icon: VetIcon },
          { name: 'Videos', Icon: VideosIcon },
          { name: 'Profile', Icon: ProfileIcon },
        ].map(({ name, Icon }) => (
          <TouchableOpacity key={name} onPress={() => onTabPress(name)} style={styles.tabItem}>
            <Icon width={24} height={24} fill={activeTab === name ? 'green' : 'gray'} />
            <Text style={[styles.tabLabel, { color: activeTab === name ? 'green' : 'gray' }]}>{name}</Text>
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
    alignItems: 'center',
  },
  tabBar: {
    fontFamily: 'Kodchasan-Regular',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
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
