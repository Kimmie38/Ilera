import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ArchieveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order Tracker Screen (Coming Soon)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
