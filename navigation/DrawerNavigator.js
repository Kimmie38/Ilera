import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import MainScreen from '../screens/MainScreen';
// import ProfileScreen from '../screens/ProfileScreen';

import OrderTrackerScreen from '../hamburger/OrderTrackerScreen';
import CommunityScreen from '../hamburger/CommunityScreen';
import SupportScreen from '../hamburger/SupportScreen';
import TerminatedAppointmentScreen from '../hamburger/TerminatedScreen';
import ArchieveScreen from '../hamburger/ArchieveScreen';
import SignoutScreen from '../hamburger/SignoutScreen';

// Custom drawer
// import CustomDrawer from '../component/CustomDrawer';
// import ArchieveScreen from '../hamburger/ArchieveScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#e0eff1', 
          width: 260,
        },
      }}
    >
      <Drawer.Screen name="OrderTracker" component={OrderTrackerScreen} />
      <Drawer.Screen name="Community" component={CommunityScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
      <Drawer.Screen name="Terminated" component={TerminatedAppointmentScreen} />
      <Drawer.Screen name="Archieve" component={ArchieveScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Signout" component={SignoutScreen} />
    </Drawer.Navigator>
  );
}

// Main App Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth/Login first */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Main app inside drawer */}
        <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
