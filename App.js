import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import VSignupScreen from './screens/Vet/VSignupScreen';
import VCodeVerification from './screens/Vet/VCodeVerification';
import VMainScreen from './screens/Vet/VMainScreen';
import TaskScreen from './screens/Vet/TaskScreen'
import VProfileScreen from './screens/Vet/VProfileScreen';
import VMoreScreen from './screens/Vet/VMoreScreen';
import LivestockScreen from './screens/LivestockScreen';
import InfoScreen from './screens/Vet/InfoScreen';
import VLoginScreen from './screens/Vet/VLoginScreen';
import SplashScreen from './screens/SplashScreen';
import SideMenu from './component/SideMenu';
import NotificationScreen from './screens/NotificationScreen';
import OrderTrackerScreen from './hamburger/OrderTrackerScreen';
import CommunityScreen from './hamburger/CommunityScreen';
import SupportScreen from './hamburger/SupportScreen';
import TerminatedScreen from './hamburger/TerminatedScreen';
import ProceedScreen from './hamburger/ProceedScreen';
import VSignout from './screens/Vet/VSignout';
import LoginRegister from './screens/LoginRegister';


const Stack = createNativeStackNavigator();



export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [initialRoute, setInitialRoute] = useState(null);


useEffect(() => {
  async function loadResources() {
    // Clear expired/old tokens on first launch
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refresh-Token');

    // Load fonts
    await Font.loadAsync({
      'Kodchasan-Regular': require('./assets/fonts/Kodchasan-Regular.ttf'),
      'Kodchasan-Bold': require('./assets/fonts/Kodchasan-Bold.ttf'),
    });

    // Determine starting screen
    const hasSignedUp = await AsyncStorage.getItem('hasSignedUp');
    setInitialRoute(hasSignedUp === 'true' ? 'LoginRegister' : 'First');

    setFontsLoaded(true);
  }

  loadResources();
}, []);


  if (!fontsLoaded, !initialRoute) {
    return (
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
      
    );
  }

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Second" component={SecondScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Third" component={ThirdScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RegistryScreen" component={RegistryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CodeVerificationScreen" component={CodeVerificationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HeaderAndTab" component={HeaderAndTab} options={{ headerShown: false }} />
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
      <Stack.Screen name="Proceed" component={ProceedScreen}options={{ headerShown: false }} />
       <Stack.Screen name="SideMenu" component={SideMenu}options={{ headerShown: false }} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen}options={{ headerShown: false }} />
       <Stack.Screen name="LoginRegister" component={LoginRegister}options={{ headerShown: false }} />
      
    </Stack.Navigator>
  </NavigationContainer>
);
}
