
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function MoreScreen({ route, navigation }) {
  const { doctor } = route.params;

  return (
    <View style={styles.container}>
      {/* Custom Header */}
     <View style={styles.header}>
      <TouchableOpacity onPress={() => {
  if (navigation.canGoBack()) {
    navigation.goBack();
  } else {
    navigation.navigate('VetScreen'); // Fallback
  }
}} style={styles.backButton}>
           <Ionicons name="arrow-back" size={24} color="#333" />
         </TouchableOpacity>
      <Text style={styles.headerTitle}>Doctor's Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Doctor photo */}
        <Image source={doctor.image} style={styles.avatar} />

        {/* Doctor name */}
        <Text style={styles.name}>{doctor.name}</Text>

        {/* Availability status */}
        <View style={styles.statusRow}>
          <Text style={styles.statusText}>
            {doctor.available ? 'Available' : 'Unavailable'}
          </Text>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: doctor.available ? 'green' : 'gray' },
            ]}
          />
        </View>

        {/* Description */}
        <Text style={styles.bio}>
          10 years working experience with goats, cows, pigs and lots of animals. Dr {doctor.name.split(' ')[1]} holds a Masters in Animal Science from the University of Kaduna, Kafanchan.
        </Text>

        {/* Location */}
        <View style={styles.locationRow}>
          <Entypo name="location-pin" size={20} color="#000" />
          <Text style={styles.location}>PRTV Junction Rayfield</Text>
        </View>

        {/* Contact buttons */}
        <View style={styles.contactRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="call" size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Request button */}
        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => {
            ToastAndroid.show('Service currently unavailable', ToastAndroid.SHORT);
          }}
        >
          <Text style={styles.requestText}>Request Service</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 header: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingTop: 50,
  paddingBottom: 12,
  backgroundColor: '#fff',
  position: 'relative',
},
headerTitle: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 60, // ⬅️ aligns vertically with the back button
  textAlign: 'center',
  fontSize: 18,
  fontWeight: '600',
  color: '#000',
},
backButton: {
  padding: 8,
  backgroundColor: '#DDDDDE',
  borderRadius: 30,

  // Shadow for iOS
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,

  // Elevation for Android
  elevation: 5,
},
  content: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  statusText: {
    fontSize: 14,
    color: 'green',
    marginRight: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  bio: {
    fontSize: 13,
    textAlign: 'center',
    color: '#555',
    marginVertical: 12,
    lineHeight: 20,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  location: {
    fontSize: 13,
    color: '#333',
  },
  contactRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
  iconButton: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 30,
  },
  requestButton: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  requestText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
