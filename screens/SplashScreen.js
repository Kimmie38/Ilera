
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Ilhera</Text>
      <ActivityIndicator size="large" color="#37833b" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Kodchasan-Bold',
    marginBottom: 20,
    color: '#37833b',
  },
});
