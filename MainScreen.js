// MainScreen.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

// Import your actual screen components here
import HomeScreen from './HomeScreen';
import VetScreen from './VetScreen';
import VideosScreen from './VideosScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: 'Kodchasan-Regular', // use your font
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = require('./assets/Home.svg');
              break;
            case 'Vet':
              iconSource = require('./assets/Vet.svg');
              break;
            case 'Videos':
              iconSource = require('./assets/Resources.svg');
              break;
            case 'Profile':
              iconSource = require('./assets/Profile.svg');
              break;
            default:
              iconSource = require('./assets/Home.svg');
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.icon,
                { tintColor: focused ? '#37833b' : '#999' },
              ]}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Vet" component={VetScreen} />
      <Tab.Screen name="Videos" component={VideosScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 8,
  },
});
