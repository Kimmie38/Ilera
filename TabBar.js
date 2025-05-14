import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HomeIcon from './assets/icons/home.svg';
import VetIcon from './assets/icons/vet.svg';
import VideosIcon from './assets/icons/resources.svg';
import ProfileIcon from './assets/icons/profile.svg';

export default function TabBar() {
  const activeTab = 'Home'; // Replace this with actual active tab logic

  const tabs = [
    { name: 'Home', Icon: HomeIcon },
    { name: 'Vet', Icon: VetIcon },
    { name: 'Videos', Icon: VideosIcon },
    { name: 'Profile', Icon: ProfileIcon },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map(({ name, Icon }) => {
        const isActive = name === activeTab;
        return (
          <TouchableOpacity
            key={name}
            onPress={() => console.log(`${name} tab clicked`)}
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
