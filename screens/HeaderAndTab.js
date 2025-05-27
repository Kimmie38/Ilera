import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import MenuIcon from '../assets/icons/menu.svg';
import BellIcon from '../assets/icons/bell.svg';

export default function HeaderAndTab() {
  const navigation = useNavigation();

   const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());

  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <MenuIcon width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Bell pressed')}>
        <BellIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
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
  },
});
