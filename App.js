import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DrawerNavigator from './navigation/DrawerNavigator';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { ActivityIndicator, View } from 'react-native'; 

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import RegistryScreen from './screens/RegistryScreen';
import SignupScreen from './screens/SignupScreen';
import CodeVerificationScreen from './screens/CodeVerificationScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import RegisterScreen from './screens/RegisterScreen';
import BioScreen from './screens/BioScreen';
import DashboardScreen from './screens/DashboardScreen';
import GraphScreen from './screens/GraphScreen';
import HeaderAndTab from './screens/HeaderAndTab';
import VetScreen from './screens/VetScreen';
import MoreScreen from './screens/MoreScreen';
import ProfileScreen from './screens/ProfileScreen';
import PersonalScreen from './screens/PersonalScreen';
import VideoScreen from './screens/VideoScreen';
import Signout from './screens/Signout'
import VSignupScreen from './screens/VSignupScreen';
import VCodeVerification from './screens/VCodeVerification';
import VMainScreen from './screens/VMainScreen';
import TaskScreen from './screens/TaskScreen'
import VProfileScreen from './screens/VProfileScreen';
import VMoreScreen from './screens/VMoreScreen';
import LivestockScreen from './screens/LivestockScreen';
import InfoScreen from './screens/InfoScreen';
import VLoginScreen from './screens/VLoginScreen';
import OrderTrackerScreen from './hamburger/OrderTrackerScreen';
import CommunityScreen from './hamburger/CommunityScreen';
import SupportScreen from './hamburger/SupportScreen';
import TerminatedScreen from './hamburger/TerminatedScreen';
import ArchieveScreen from './hamburger/ArchieveScreen';
import ProceedScreen from './hamburger/ProceedScreen';


import VSignout from './screens/VSignout';


const Stack = createNativeStackNavigator();



export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Kodchasan-Regular': require('./assets/fonts/Kodchasan-Regular.ttf'),
        'Kodchasan-Bold': require('./assets/fonts/Kodchasan-Bold.ttf'), // 👈 Replace with your actual font
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Second" component={SecondScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Third" component={ThirdScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegistryScreen" component={RegistryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CodeVerificationScreen" component={CodeVerificationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HeaderAndTab" component={HeaderAndTab} options={{ headerShown: false }} />
      {/* <Stack.Screen name="MainDrawer" component={DrawerNavigator} options={{ headerShown: false }} /> */}
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BioScreen" component={BioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GraphScreen" component={GraphScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VetScreen" component={VetScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MoreScreen" component={MoreScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PersonalScreen" component={PersonalScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signout" component={Signout} options={{ headerShown: false }} />
      <Stack.Screen name="VSignout" component={VSignout} options={{ headerShown: false }} />
      <Stack.Screen name="VSignup" component={VSignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VLoginScreen" component={VLoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VCodeVerification" component={VCodeVerification} options={{ headerShown: false }} />
      <Stack.Screen name="VMainScreen" component={VMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TaskScreen" component={TaskScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VProfileScreen" component={VProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VMoreScreen" component={VMoreScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LivestockScreen" component={LivestockScreen} options={{ headerShown: false }} />
      <Stack.Screen name="InfoScreen" component={InfoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OrderTracker" component={OrderTrackerScreen}options={{ headerShown: false }} />
      <Stack.Screen name="Community" component={CommunityScreen}options={{ headerShown: false }} />
       <Stack.Screen name="Support" component={SupportScreen}options={{ headerShown: false }} />
       <Stack.Screen name="Terminated" component={TerminatedScreen}options={{ headerShown: false }} />
       <Stack.Screen name="Archieve" component={ArchieveScreen}options={{ headerShown: false }} />
      <Stack.Screen name="Proceed" component={ProceedScreen}options={{ headerShown: false }} />
      
    </Stack.Navigator>
  </NavigationContainer>
);
}
