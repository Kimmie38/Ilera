import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import your SVG icons
import TempIcon from './assets/icons/temperature.svg';
import MotionIcon from './assets/icons/motion.svg';
import HeartIcon from './assets/icons/heart.svg';

export default function LivestockCard({
  animalType = 'Cow',
  tag = '250',
  temperature = '23k',
  motion = '40m/s',
  heartRate = '2hb/s',
}) {
  const navigation = useNavigation(); // ✅ Required to enable navigation

  return (
    <View style={styles.section}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.label}>
            Animal Type: <Text style={styles.value}>{animalType}</Text>
          </Text>
          <Text style={styles.label}>
            Animal Tag: <Text style={styles.value}>{tag}</Text>
          </Text>
        </View>

        {/* Metrics */}
        <View style={styles.metricsRow}>
          <View style={styles.metric}>
            <View style={styles.iconWrapper}>
              <TempIcon width={35} height={35} fill="#37833b" />
            </View>
            <Text style={styles.metricValue}>{temperature}</Text>
          </View>
          <View style={styles.metric}>
            <View style={styles.iconWrapper}>
              <MotionIcon width={35} height={35} fill="#37833b" />
            </View>
            <Text style={styles.metricValue}>{motion}</Text>
          </View>
          <View style={styles.metric}>
            <View style={styles.iconWrapper}>
              <HeartIcon width={35} height={35} fill="#37833b" />
            </View>
            <Text style={styles.metricValue}>{heartRate}</Text>
          </View>
        </View>

        {/* View Button */}
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('GraphScreen')}
        >
          <Text style={styles.viewButtonText}>View &gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#f6f6f6',
  },
  card: {
    backgroundColor: '#ffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    color: '#777',
    fontFamily: 'Kodchasan-Regular',
  },
  value: {
    color: '#000',
    fontFamily: 'Kodchasan-Bold',
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  metric: {
    alignItems: 'center',
    flex: 1,
  },
  iconWrapper: {
    backgroundColor: '#E0F2E5',
    borderRadius: 50,
    padding: 10,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Kodchasan-Regular',
  },
  viewButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#37833b',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Kodchasan-Bold',
  },
});
