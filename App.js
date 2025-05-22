import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native'; 

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import RegistryScreen from './RegistryScreen';
import SignupScreen from './SignupScreen';
import CodeVerificationScreen from './CodeVerificationScreen';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import RegisterScreen from './RegisterScreen';
import BioScreen from './BioScreen';
import DashboardScreen from './DashboardScreen';
import GraphScreen from './GraphScreen';
import HeaderAndTab from './HeaderAndTab';
import VetScreen from './VetScreen';
import MoreScreen from './MoreScreen';
import ProfileScreen from './ProfileScreen';
import PersonalScreen from './PersonalScreen';
import VideoScreen from './VideoScreen';
import Signout from './Signout'
import VSignupScreen from './VSignupScreen';
import VCodeVerification from './VCodeVerification';
import VMainScreen from './VMainScreen';
import TaskScreen from './TaskScreen'
import VProfileScreen from './VProfileScreen';
import VMoreScreen from './VMoreScreen';
import LivestockScreen from './LivestockScreen';
import InfoScreen from './InfoScreen';
import VLoginScreen from './VLoginScreen';
import VSignout from './VSignout';


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
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BioScreen" component={BioScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GraphScreen" component={GraphScreen} options={{headerShown: false}} />
        <Stack.Screen name="VetScreen" component={VetScreen} options={{headerShown: false}} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{headerShown: false}} />
        <Stack.Screen name="MoreScreen" component={MoreScreen} options={{headerShown: false}} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}} />
        <Stack.Screen name="PersonalScreen" component={PersonalScreen} options={{headerShown: false}} />
        <Stack.Screen name="Signout" component={Signout} options={{headerShown: false}} />
        <Stack.Screen name="VSignout" component={VSignout} options={{headerShown: false}} />
        <Stack.Screen name="VSignup" component={VSignupScreen} options={{headerShown: false}} />
        <Stack.Screen name="VLoginScreen" component={VLoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="VCodeVerification" component={VCodeVerification} options={{headerShown: false}} />
        <Stack.Screen name="VMainScreen" component={VMainScreen} options={{headerShown: false}} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} options={{headerShown: false}} />
        <Stack.Screen name="VProfileScreen" component={VProfileScreen} options={{headerShown: false}} />
        <Stack.Screen name="VMoreScreen" component={VMoreScreen} options={{headerShown: false}} />
        <Stack.Screen name="LivestockScreen" component={LivestockScreen} options={{headerShown: false}} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
