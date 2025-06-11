import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import HeaderAndTab from './HeaderAndTab'; // adjust path if needed
import TabBar from './TabBar';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function MainScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.replace('LoginScreen'); 
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <View style={styles.container}>
      <HeaderAndTab
        onMenuPress={() => console.log('Hamburger clicked')}
        onBellPress={() => console.log('Bell clicked')}
        activeTab="Home"
        onTabPress={(tab) => console.log(`${tab} tab clicked`)}
      />

      <View style={styles.body}>
        {/* Image added here */}
        <Image
          source={require('../assets/image.png')} // Adjust path if needed
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.noAnimalsText}>No Animals Registered</Text>
        <Text style={styles.subText}>
          Please Click the register button{"\n"}to register your animals and{"\n"}track their health
        </Text>
      </View>
       <TouchableOpacity
              style={styles.floatingButton}
              onPress={() => navigation.navigate('RegisterScreen')}
              activeOpacity={0.7}
            >
              <Ionicons name="add" size={32} color="white" />
            </TouchableOpacity>

      <TabBar activeTab="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  noAnimalsText: {
    fontFamily: 'Kodchasan-Bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  subText: {
    fontFamily: 'Kodchasan-Regular',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
