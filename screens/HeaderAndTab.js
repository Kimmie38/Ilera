import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MenuIcon from '../assets/icons/menu.svg';
import BellIcon from '../assets/icons/bell.svg';

export default function HeaderAndTab({ onMenuPress, onBellPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress}>
        <MenuIcon width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onBellPress}>
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
  inputWithIcon: {
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: '#ddd',
  borderWidth: 1,
  borderRadius: 5,
  paddingLeft: 10,
  marginTop: 5,
},
});
