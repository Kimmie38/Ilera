import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Import your custom SVG icons
import WhatsappIcon from '../assets/icons/WhatsApp.svg';
import InstagramIcon from '../assets/icons/Instagram.svg';
import TwitterIcon from '../assets/icons/X.svg';
import TelegramIcon from '../assets/icons/Telegram App.svg';

export default function CommunityScreen({ navigation }) {
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't open URL:", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Community</Text>
      </View>

      <Text style={styles.subText}>
        Check out our community on our various social media platforms
      </Text>

      <TouchableOpacity style={styles.item} onPress={() => openLink('https://wa.me/123456789')}>
        <WhatsappIcon width={40} height={40} />
        <Text style={styles.text}>Whatsapp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => openLink('https://instagram.com')}>
        <InstagramIcon width={40} height={40} />
        <Text style={styles.text}>Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => openLink('https://twitter.com')}>
        <TwitterIcon width={40} height={40} />
        <Text style={styles.text}>X/Twitter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => openLink('https://telegram.org')}>
        <TelegramIcon width={40} height={40} />
        <Text style={styles.text}>Telegram</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Kodchasan-Bold',
    marginLeft: 50, 
  },
  backButton: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  subText: {
    color: '#888',
    marginBottom: 20,
    fontSize: 15,
    fontFamily:'Kodchasan-Regular',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily:'Kodchasan-Regular',
    fontWeight:600 ,
  },
});
