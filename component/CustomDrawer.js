import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; // Use any icons you like

export default function CustomDrawer(props) {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.itemActive} onPress={() => navigation.navigate('OrderTracker')}>
          <Ionicons name="cart-outline" size={20} color="#000" style={styles.icon} />
          <Text style={styles.textActive}>Order Tracker</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Community')}>
          <FontAwesome5 name="users" size={18} color="#000" style={styles.icon} />
          <Text style={styles.text}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Support')}>
          <Ionicons name="headset-outline" size={20} color="#000" style={styles.icon} />
          <Text style={styles.text}>Customer Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Terminated')}>
          <MaterialCommunityIcons name="calendar-remove-outline" size={20} color="#000" style={styles.icon} />
          <Text style={styles.text}>Terminated Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Archives')}>
          <Ionicons name="folder-outline" size={20} color="#000" style={styles.icon} />
          <Text style={styles.text}>Archives Animals</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Signout')}>
        <Ionicons name="exit-outline" size={20} color="red" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#e0eff1',
    paddingVertical: 20,
  },
  menu: {
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  itemActive: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#4caf50',
    borderRadius: 8,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  textActive: {
    fontSize: 14,
    color: '#fff',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 10,
  },
});
