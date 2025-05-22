import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import HeaderAndTab from './HeaderAndTab'; 
import TabBar from './TabBar';             
import LivestockCard from './LivestockCard';

const livestockData = [
    { id: '1', type: 'Cow', tag: 250, temp: '-', motion: '-', heart: '-' },
    { id: '2', type: 'Goat', tag: 183, temp: '-', motion:'-', heart: '-' },
    { id: '3', type: 'Pig', tag: 145, temp: '-', motion: '-', heart: '-' },
    { id: '4', type: 'Sheep', tag: 322, temp: '-', motion: '-', heart: '-' },
  ];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <HeaderAndTab title="Home" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Filter Tabs */}
        <View style={styles.filtersRow}>
          <Text style={[styles.filterTab, styles.activeFilter]}>All</Text>
          <Text style={styles.filterTab}>With Trackers</Text>
          <Text style={styles.filterTab}>Without Trackers</Text>
        </View>

        {/* Animal Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.animalFilters}>
          {[
            { name: 'Cows', count: '0', active: true },
            { name: 'pigs', count: '0' },
            { name: 'sheep', count: '0' },
            { name: 'Goats', count: '0' },
            { name: 'Ram', count: '0' },
          ].map((item, index) => (
            <View key={index} style={styles.animalChipWrapper}>
              <Text
                style={[
                  styles.animalChip,
                  item.active && styles.animalChipActive
                ]}
              >
                {item.name}
              </Text>
              <View style={styles.animalBadge}>
                <Text style={styles.badgeText}>{item.count}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Total Count */}
        <Text style={styles.totalCount}>0000</Text>

        {/* Livestock Cards */}
        <View style={styles.livestockSection}>
    <FlatList
      data={livestockData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cardWrapper}>
          <LivestockCard
            animalType={item.type}
            tag={item.tag}
            temperature={item.temp}
            motion={item.motion}
            heartRate={item.heart}
          />
        </View>
      )}
      scrollEnabled={false}
    />
  </View>
        <View style={{ height: 80 }} />
      </ScrollView>

      <TabBar activeTab="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    
  },
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  filterTab: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  livestockSection: {
    backgroundColor: '#f6f6f6', 
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
  },
  
  cardWrapper: {
    marginBottom: 12,
  },
  activeFilter: {
    backgroundColor: '#37833b',
    color: '#fff',
    borderWidth: 0,
  },
  animalFilters: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  animalChipWrapper: {
    alignItems: 'center',
    marginRight: 12,
  },
  animalChip: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  animalChipActive: {
    backgroundColor: '#37833b',
    color: '#fff',
    borderWidth: 0,
  },
  animalBadge: {
    backgroundColor: '#111',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  totalCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
});
