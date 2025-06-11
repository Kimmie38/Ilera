import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuIcon from '../assets/icons/menu.svg';
import BellIcon from '../assets/icons/bell.svg';
import SideMenu from '../component/SideMenu'; // Adjust the path if it's in a different directory

export default function HeaderAndTab() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <MenuIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
       <BellIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      <SideMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        navigation={navigation}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    zIndex: 1,

    // ✅ Add these to remove shadow
    elevation: 0,          // Android shadow
    shadowColor: 'transparent', // iOS
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
  },
});
