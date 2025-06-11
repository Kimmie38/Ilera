import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';  // For plus icon

import HeaderAndTab from './HeaderAndTab'; 
import TabBar from './TabBar';             
import LivestockCard from './LivestockCard';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import api from '../utils/api'


export default function DashboardScreen({ route, navigation }) {
  const [livestockData, setLivestockData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

useFocusEffect(
  useCallback(() => {
    const fetchAnimals = async () => {
      try {
        const response = await api.get('livestock/'); // Adjust the endpoint if needed
        setLivestockData(response.data); // Make sure it's an array
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, [])
);
 const filteredAnimals = livestockData.filter(animal => {
  if (activeFilter === 'All') return true;
  return animal.category?.toLowerCase() === activeFilter.toLowerCase();
});
  const getTagNumber = (tag_id) => {
    if (!tag_id) return '-';
    const parts = tag_id.split('-');
    return parts.length > 1 ? parts[1] : tag_id;
  };

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
              renderItem={({ item }) => (
                <View style={styles.cardWrapper}>
                  <LivestockCard
                    animalType={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    tag={getTagNumber(item.tag_id)}
                    temperature={item.temp ?? '-'}
                    motion={item.motion ?? '-'}
                    heartRate={item.heart ?? '-'}
                  />
                </View>
              )}
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
