import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import HomeIcon from '../assets/icons/home.svg';
import TaskIcon from '../assets/icons/task.svg';
import ProfileIcon from '../assets/icons/profile.svg';

export default function VTabBar({ activeTab: externalActiveTab }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [activeTab, setActiveTab] = useState(externalActiveTab || '');

  const routeNameToTab = {
    VMainScreen: 'Home',
    TaskScreen: 'Task',
    VProfileScreen: 'Profile',
  };

  useEffect(() => {
    if (externalActiveTab) {
      setActiveTab(externalActiveTab);
    } else {
      const tab = routeNameToTab[route.name];
      if (tab) setActiveTab(tab);
    }
  }, [externalActiveTab, route.name]);

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    switch (tabName) {
      case 'Home':
        navigation.navigate('VMainScreen');
        break;
      case 'Request':
        navigation.navigate('TaskScreen');
        break;
      case 'Profile':
        navigation.navigate('VProfileScreen');
        break;
    }
  };

  const tabs = [
    { name: 'Home', Icon: HomeIcon },
    { name: 'Request', Icon: TaskIcon },
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
