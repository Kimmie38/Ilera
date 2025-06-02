// components/SideMenu.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');


export default function SideMenu({ visible, onClose, navigation }) {
  if (!visible) return null;
  const route = useRoute();
const currentRoute = route.name;

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback>
          <View style={styles.menu}>
            <View style={styles.menuContent}>
           
           <TouchableOpacity
        style={currentRoute === 'OrderTracker' ? styles.itemActive : styles.item}
        onPress={() => navigation.navigate('OrderTracker')} >
            
        <Ionicons name="cart-outline" size={25} color="#000" style={styles.icon} />
                <Text style={currentRoute === 'OrderTracker' ? styles.textActive : styles.text}>
                Order Tracker
                </Text>
                </TouchableOpacity>
              <TouchableOpacity
               style={currentRoute === 'Community' ? styles.itemActive : styles.item}
        onPress={() => navigation.navigate('Community')} >
            
                <FontAwesome5 name="users" size={23} color="#000" style={styles.icon} />
                   <Text style={currentRoute === 'Community' ? styles.textActive : styles.text}>
                Community
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
  style={currentRoute === 'Support' ? styles.itemActive : styles.item}
        onPress={() => navigation.navigate('Support')} >

                <Ionicons name="headset-outline" size={23} color="#000" style={styles.icon} />
                <Text style={currentRoute === 'Support' ? styles.textActive : styles.text}>
                Support
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={currentRoute === 'Terminated' ? styles.itemActive : styles.item}
        onPress={() => navigation.navigate('Terminated')} >

                <MaterialCommunityIcons
                  name="calendar-remove-outline"
                  size={23}
                  color="#000"
                  style={styles.icon}
                />
                 <Text style={currentRoute === 'Terminated' ? styles.textActive : styles.text}>
                Terminated Appointment
                </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('Archieve');
                  onClose();
                }}
              >
                <Ionicons name="folder-outline" size={23} color="#000" style={styles.icon} />
                <Text style={styles.text}>Archives Animals</Text>
              </TouchableOpacity> */}
            </View>

            <TouchableOpacity
              style={styles.logout}
              onPress={() => {
                navigation.navigate('Signout');
                onClose();
              }}
            >
              <Ionicons name="exit-outline" size={20} color="red" />
              <Text style={styles.logoutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
    backgroundColor: 'rgb(255, 255, 255)',
    zIndex: 1000,
    
  },
  menu: {
    width: width * 0.7,
    height: '100%',
    backgroundColor: '#DCE9EC',
    paddingVertical: 20,
    justifyContent: 'space-between',
     paddingHorizontal: 12,
    paddingTop: 60, 
  },
  menuContent: {
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
    paddingHorizontal: 20,
    backgroundColor: '#4caf50',
    borderRadius: 8,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    fontSize: 16,
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
  },
  logoutText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 10,
  },
});
