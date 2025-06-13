import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import HeaderAndTab from './HeaderAndTab';
import TabBar from './TabBar';
import LivestockCard from './LivestockCard';
import api from '../utils/api';

import io from 'socket.io-client';

const SOCKET_URL = 'http://YOUR_BACKEND_SOCKET_URL'; 

export default function DashboardScreen({ route, navigation }) {
  const [livestockData, setLivestockData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [sensorUpdates, setSensorUpdates] = useState({});

  // Fetch animal data from backend
  useFocusEffect(
    useCallback(() => {
      const fetchAnimals = async () => {
        try {
          const response = await api.get('livestock/');
          setLivestockData(response.data);
        } catch (error) {
          console.error('Error fetching animals:', error);
        }
      };

      fetchAnimals();
    }, [])
  );

  // Connect to WebSocket and listen for sensor updates
  useEffect(() => {
    const socket = io(SOCKET_URL);

    socket.on('connect', () => {
      console.log('Connected to socket');

      // Join room or subscribe to device updates (dummy device ID for now)
      socket.emit('join_device', { device_id: 'dummy-id-123' });
    });

    socket.on('sensor_data', (data) => {
      console.log('Sensor data received:', data);
      setSensorUpdates(prev => ({
        ...prev,
        [data.device_id]: data,
      }));
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const getTagNumber = (tag_id) => {
    if (!tag_id) return '-';
    const parts = tag_id.split('-');
    return parts.length > 1 ? parts[1] : tag_id;
  };

  const filteredAnimals = livestockData.filter(animal => {
    if (activeFilter === 'All') return true;
    return animal.category?.toLowerCase() === activeFilter.toLowerCase();
  });

  const filters = [
    { name: 'All' },
    { name: 'Cattle' },
    { name: 'Sheep' },
    { name: 'Goat' },
  ];

  return (
    <View style={styles.container}>
      <HeaderAndTab title="Home" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.filtersRow}>
          {filters.map(filter => (
            <TouchableOpacity 
              key={filter.name} 
              onPress={() => setActiveFilter(filter.name)}
              style={[
                styles.filterTab,
                activeFilter === filter.name && styles.activeFilter,
              ]}
            >
              <Text style={activeFilter === filter.name ? styles.filterTextActive : styles.filterText}>
                {filter.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.totalCount}>{filteredAnimals.length}</Text>

        <View style={styles.livestockSection}>
          {filteredAnimals.length === 0 ? (
            <Text style={styles.noAnimalsText}>No animals registered yet.</Text>
          ) : (
            <FlatList
              data={filteredAnimals}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                const deviceId = item.sensor_device?.device_id || 'dummy-id-123';
                const sensorData = sensorUpdates[deviceId] || {};

                return (
                  <View style={styles.cardWrapper}>
                    <LivestockCard
                      animalType={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      tag={getTagNumber(item.tag_id)}
                      temperature={sensorData.temperature ?? item.temp ?? '-'}
                      motion={sensorData.steps ?? item.motion ?? '-'}
                      heartRate={sensorData.heart_rate ?? item.heart ?? '-'}
                    />
                  </View>
                );
              }}
              scrollEnabled={false}
            />
          )}
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Floating plus button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('RegisterScreen')}
        activeOpacity={0.7}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>

      <TabBar activeTab="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { padding: 16 },
  filtersRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  filterTab: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  activeFilter: {
    backgroundColor: '#37833b',
    borderWidth: 0,
  },
  filterText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily:'Kodchasan-Bold',
  },
  filterTextActive: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily:'Kodchasan-Bold'
  },
  livestockSection: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 12,
    minHeight: 100,
  },
  cardWrapper: { marginBottom: 12 },
  totalCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  noAnimalsText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    paddingVertical: 40,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 80, // above tab bar
    right: 20,
    backgroundColor: '#37833b',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
